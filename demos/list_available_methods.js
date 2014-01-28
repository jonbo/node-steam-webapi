var Steam = require('../lib/Steam');
var fs = require('fs');

// Create a file called STEAM_KEY and stick your API key in it
var steamAPIKey = fs.readFileSync('./STEAM_KEY').toString();

Steam.ready(steamAPIKey, function(err) {

    if (err) return console.log(err);

    console.log("Generated on "+(new Date()).toUTCString());
    console.log("steamObj: {requiredParams,[optionalParams]} these may be passed in or set on the class instance"+"\n");

    for (var interfaceName in Steam.INTERFACES) {
        if (Steam.INTERFACES.hasOwnProperty(interfaceName)) {

            var _interface = Steam.INTERFACES[interfaceName];

            for (var methodName in _interface) {
                if (_interface.hasOwnProperty(methodName)) {

                    var _method = _interface[methodName];
                    var camelMethodName = methodName.substr(0,1).toLowerCase() + methodName.substr(1);

                    var requiredParams = _method.requiredParams;
                    var optionalParams = _method.optionalParams.slice(0); // .slice(0) clones
                    var keyIndex = optionalParams.indexOf('key');
                    if (keyIndex !== -1) {
                        optionalParams.splice(keyIndex,1);
                    }

                    var sep = '';
                    if (requiredParams.length > 0 && optionalParams.length > 0) sep = ',';

                    if (optionalParams.length > 0) optionalParams = '['+optionalParams+']';

                    console.log('{%s} %s(steamObj, callback) # steamObj: {%s%s%s}', interfaceName, camelMethodName, requiredParams, sep, optionalParams);


                }
            }

        }
    }

    //console.log(Steam.INTERFACES);
});
