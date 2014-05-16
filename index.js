// Dependencies
var http = require('http');
var https = require('https');
var querystring = require('qs');


/**
 * Steam Class
 *
 * @param {Object} steamObj A default steamObj that will be referenced from every method call
 * @constructor
 */

var Steam = function(steamObj) {
    extend(this, steamObj);
};

// Expose module
module.exports = Steam;

// Popular game appIDs/gameIDs static references
Steam.TF2 = 440;
Steam.DOTA2 = 570;
Steam.PORTAL2 = 620;
Steam.CSGO = 730;

// References will be stored here
Steam.INTERFACES = {};


/**
 * Retrieve the current set of Steam WebAPI methods from the API itself
 *
 * @param {String} (optional) key A Steam API key
 * @param {Function} callback After the methods are retrieved and compiled for reference
 */
Steam.ready = function(key, callback) {
    // If optional key was not given
    if (typeof(key) === "function") {
        callback = key;
        key = undefined;
    }

    retrieveSteamAPIMethods(key, callback);
};
Steam.devMode = false;

// Create easy reference to the prototype
var steam = Steam.prototype;

// Global defaults
steam.secure = true;
steam.host = 'api.steampowered.com';

/**
 * Helper function to make the HTTP request with a valid Steam WebAPI url
 *
 * @param {String} interfaceName
 * @param {String} funcName
 * @param {String|Number} version e.g. 1, "1", "v1", or "v0001"
 * @param {Object} parameters
 * @param {Function} callback The data returned by the request
 */
steam.request = function(interfaceName, funcName, version, httpMethod, parameters, callback) {
    // Allow to be passed as a number or string
    if (typeof(version) === 'number' || !isNaN(parseInt(version))) version = 'v'+version;

    if (typeof(parameters) === 'object') { 
        // Change parameter object for service interfaces
        // https://developer.valvesoftware.com/wiki/Steam_Web_API#Calling_Service_interfaces 
        if(interfaceName.toLowerCase().indexOf('service') > 0) {
            var key     = parameters.key,
                format  = parameters.format,
                input   = parameters;
            delete input['key'];
            delete input['format'];
            parameters = {
                key: key,
                input_json: JSON.stringify(input)
            };
            if(format){
                parameters.format = format;
            }
        }
        parameters = querystring.stringify(parameters);
    }

    var options = {
        method: httpMethod,
        host : get(this, null, 'host'),
        path : '/' + interfaceName + '/' + funcName + '/' + version
    };
    if (httpMethod === "GET") {
        options.path += '/?' + parameters;
    }
    else if (httpMethod === "POST") {
        options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(parameters)
        };
        options.data = parameters;
    }

    request(this, options, callback);

};

/**
 * Helper method to get a value by searching for it by priority
 *
 *  First checking the options object passed in to the method call
 *  then the instance object properties
 *  or finally the global Steam object
 */

//
function get(self, steamObj, key) {
    steamObj = steamObj || {};
    if (steamObj[key] !== undefined) {
        return steamObj[key];
    }
    else if (self[key] !== undefined) {
        return self[key];
    }
    else if (Steam[key] !== undefined) {
        return Steam[key];
    }
    else {
        throw new Error("Missing required field: "+key);
    }
}

// Handle the actual HTTP request
function request(self, options, callback) {
    var _http = get(self, options, 'secure')? https : http;

    if (Steam.devMode) console.log(options);

    var req = _http.request(options, function(res) {
        var data, dataStr = '';

        res.on('data', function (chunk) {
            dataStr += chunk;
        });
        res.on('end', function(){

            var statusCode = res.statusCode;
            if (statusCode !== 200) {

                if (statusCode === 401) {
                    return callback(new Error('Invalid API Key'));
                }
                else {
                    return callback(new Error("HTTP "+statusCode+" "+http.STATUS_CODES[statusCode]));
                }

            }

            // Ensure it is complete and valid JSON
            try {
                data = JSON.parse(dataStr);
            }
            catch (e) {
                return callback(new Error('Unable to parse JSON data'));
            }

            // Trim or simplify data object if it's entirely wrapped in data.response or data.result
            if ((data.response instanceof Object) && (Object.keys(data).length === 1)) {
                data = data.response;
            }
            if ((data.result instanceof Object) && Object.keys(data).length === 1) {
                data = data.result;
            }
            callback(null, data);
        })

    });

    req.end(options.data);

    req.on('error', function(err) {
       callback(err);
    });

}

// Get the parameters from the steamObj passed in or Steam instance
function getParams(self, steamObj, requiredParams, optionalParams) {
    // Required params will throw exception if they don't exist
    var paramObj = {};
    for (var i = 0, len = requiredParams.length; i < len; i++) {
        var paramName = requiredParams[i];

        // Support array arguments
        paramName = paramName.replace("[0]","");

        paramObj[paramName] = get(self, steamObj, paramName);
    }

    // Ignore the thrown exception on optionalParams if field isn't given
    for (var i = 0, len = optionalParams.length; i < len; i++) {
        var paramName = optionalParams[i];

        // Support array arguments
        paramName = paramName.replace("[0]","");

        try {
            paramObj[paramName] = get(self, steamObj, paramName);
        } catch(e) {

        }

    }
    return paramObj;
}

// Add some easy references to the new method
function addInterfaceMethod(interfaceName, funcName, fN) {

    // Store a reference to every interface/method
    if (Steam.INTERFACES[interfaceName] === undefined) {
        Steam.INTERFACES[interfaceName] = {};
    }
    Steam.INTERFACES[interfaceName][funcName] = fN;

    // Camel case the method name
    var name = funcName.substr(0,1).toLowerCase() + funcName.substr(1);

    // Add method to Steam's prototype
    if (!isMultiGameInterface(interfaceName)) {
        steam[name] = fN;
    }
    // If multiple interfaces use the same method name
    // Create a new method that requires a gameid property to find the correct method
    //  and call the steam method automatically
    else {
        // We only need to do this once
        if (steam[name] !== undefined) return;

        // e.g. Turns 'IEconItems_440' into 'IEconItems'
        var multi_interface_name = interfaceName.split('_')[0];

        // Add method to Steam's prototype
        steam[name] = function(steamObj, callback) {
            var gameid = get(this, steamObj, 'gameid');

            var interface_name = multi_interface_name + '_' + gameid;

            Steam.INTERFACES[interface_name][funcName].call(this, steamObj, callback);
        };
    }

}

// Builds the method and add references
function buildSteamWrapperMethod(interfaceName, funcName, defaultVersion, httpMethod, requiredParams, optionalParams) {

    // Always include the key, if we have one
    optionalParams.push('key');

    // Require gameid for methods with the same name in the different interfaces
    if (isMultiGameInterface(interfaceName)) {
        requiredParams.push('gameid');
    }

    var wrapperMethod = function(steamObj, callback) {
        var params = getParams(this, steamObj, requiredParams, optionalParams);
        var version = steamObj.version || defaultVersion;
        this.request(interfaceName, funcName, version, httpMethod, params, callback);
    };

    addInterfaceMethod(interfaceName, funcName, wrapperMethod);
}

// All we need to get started, we will build and attach the rest later (down below)
buildSteamWrapperMethod('ISteamWebAPIUtil', 'GetSupportedAPIList', 1, "GET", [], ['key']);

// Retrieve all Steam WebAPI http methods and add to our class prototype
function retrieveSteamAPIMethods(key, callback) {

    var _steam = new Steam();
    _steam.getSupportedAPIList({key:key}, function(err, data) {

        if (err) return callback(err);

        var apiList = data.apilist;
        if (apiList === undefined) return callback(new Error('No data returned'));

        apiList = apiList.interfaces;

        // List of interfaces
        for (var i= 0; i<apiList.length; i++) {
            var _interface = apiList[i];
            var methods = _interface.methods;

            // List of methods
            for (var j= 0; j<methods.length; j++) {
                var method = methods[j];
                var optionalParams = [], requiredParams = [];
                var params = method.parameters;

                //List of parameters
                for (var k=0; k<params.length; k++) {
                    var param = params[k];

                    if (param.optional) {
                        optionalParams.push(param.name);
                    } else {
                        requiredParams.push(param.name);
                    }
                }

                buildSteamWrapperMethod(_interface.name, method.name, method.version, method.httpmethod, requiredParams, optionalParams);
            }
        }
        callback();

    });
}

// e.g  IEconItems_440 -> true, ISteamNews -> false
function isMultiGameInterface(_interface) {
    return _interface.indexOf('_') !== -1;
}



// Object extend
function extend(destination, source) {
    for (var property in source) {
        if (source.hasOwnProperty((property))) {
            destination[property] = source[property];
        }

    }
    return destination;
}
