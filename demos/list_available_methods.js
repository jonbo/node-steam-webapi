var Steam = require('..');
var fs = require('fs');

// Create a file called STEAM_KEY and stick your API key in it
// (or insert it here)
var steamAPIKey = '';
if (steamAPIKey.length === 0) {
    try { steamAPIKey = fs.readFileSync('../STEAM_KEY').toString();}
    catch(e) {
        try { steamAPIKey = fs.readFileSync('./STEAM_KEY').toString(); }
        catch(e) { console.log('No API key provided'); }
    }
}

Steam.ready(steamAPIKey, function(err) {

    if (err) return console.log(err);
    var steam = new Steam({key:steamAPIKey});

    console.log("Generated on "+(new Date()).toUTCString());
    console.log("\n* > 'key' is needed for most methods even if not specified*"+"\n");
    console.log("\n* > 'version' is needed if you want to specify a lower one*"+"\n");

    steam.getSupportedAPIList({}, function(err, data) {
        var interfaces = data.apilist.interfaces, methods, params;
        var _interface, _method, param;
        for (var i=0; i<interfaces.length; i++) {
            _interface = interfaces[i];

            methods = _interface.methods;
            for (var j=0; j<methods.length; j++) {
                _method = methods[j];
                var camelMethodName = _method.name.substr(0,1).toLowerCase() + _method.name.substr(1);

                console.log('\n## %s(steamObj, cb)',camelMethodName);
                console.log('version %d {%s}', _method.version, _interface.name);

                var requiresGameID = _interface.name.indexOf('_') !== -1;

                params = _method.parameters;
                if (params.length === 0 && !requiresGameID) console.log("#### No steamObj params");
                else console.log('####steamObj');

                if (requiresGameID) {
                    console.log('\n- %s {%s} `%s` : %s', '', 'int', 'gameid', "The game id");
                }

                for (var k=0; k<params.length; k++) {
                    param = params[k];

                    var optionStr = param.optional? '(optional)' : '';
                    param.description = param.description || '';
                    console.log('\n- %s {%s} `%s` : %s', optionStr, param.type, param.name, param.description);
                }

            }

        }
    });

});
