// Dependencies
var http = require('http');
var https = require('https');
var querystring = require('querystring');


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
Steam.CSGO = 710;

// References will be stored here
Steam.INTERFACES = {};


/**
 * Retrieve the current set of Steam WebAPI methods from the API itself
 *
 * @param {String} key A Steam API key
 * @param {Function} callback After the methods are retrieved and compiled for reference
 */
Steam.ready = function(key, callback) {
    retrieveSteamAPIMethods(key, callback);
};

// Create easy reference to the prototype
var steam = Steam.prototype;

// Global defaults
steam.secure = false;
steam.host = 'api.steampowered.com';
steam.httpMethod = 'GET';
steam.echoHTTPRequests = false;

/**
 * Helper function to make the HTTP request with a valid Steam WebAPI url
 *
 * @param {String} interfaceName
 * @param {String} funcName
 * @param {String|Number} version e.g. 1, "1", "v1", or "v0001"
 * @param {Object} parameters
 * @param {Function} callback The data returned by the request
 */
steam.request = function(interfaceName, funcName, version, parameters, callback) {
    // Allow to be passed as a number or string
    if (typeof(version) === 'number' || !isNaN(parseInt(version))) version = 'v'+version;

    if (typeof(parameters) === 'object') parameters = querystring.stringify(parameters);

    var options = {
        host : get(this, null, 'host'),
        path : '/' + interfaceName + '/' + funcName + '/' + version + '/?' + parameters
    };

    request(this, options, callback);

};

// Helper method to get a value by first checking the options object, or else the instance variable
function get(self, steamObj, key) {
    steamObj = steamObj || {};
    if (steamObj[key] !== undefined) {
        return steamObj[key];
    }
    else if (self[key] !== undefined) {
        return self[key];
    }
    else {
        throw new Error("Missing required field: "+key);
    }
}

// Handle the actual HTTP request
function request(self, options, callback) {
    var _http = get(self, options, 'secure')? https : http;

    if (self.echoHTTPRequests) console.log(options);

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
            if (data.response !== undefined) {
                data = data.response;
            }
            if (data.result !== undefined) {
                data = data.result;
            }
            callback(null, data);
        })

    });

    req.end();

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
        paramObj[paramName] = get(self, steamObj, paramName);
    }

    // Ignore the thrown exception on optionalParams if field isn't given
    for (var i = 0, len = optionalParams.length; i < len; i++) {
        var paramName = optionalParams[i];
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
function buildSteamWrapperMethod(interfaceName, funcName, defaultVersion, requiredParams, optionalParams) {

    // Always include the key, if we have one
    optionalParams.push('key');

    // Require gameid for methods with the same name in the different interfaces
    if (isMultiGameInterface(interfaceName)) {
        requiredParams.push('gameid');
    }

    var wrapperMethod = function(steamObj, callback) {
            var params = getParams(this, steamObj, requiredParams, optionalParams);
            var version = steamObj.version || defaultVersion;
            this.request(interfaceName, funcName, version, params, callback);
    };

    wrapperMethod.requiredParams = requiredParams;
    wrapperMethod.optionalParams = optionalParams;

    addInterfaceMethod(interfaceName, funcName, wrapperMethod);
}

// All we need to get started, we will build and attach the rest at run-time
buildSteamWrapperMethod('ISteamWebAPIUtil', 'GetSupportedAPIList', 1, [], ['key']);


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

                buildSteamWrapperMethod(_interface.name, method.name, method.version, requiredParams, optionalParams);
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
