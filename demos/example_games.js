var fs = require('fs');
var Steam = require('..');
//Steam.devMode = true;

// Create a file called STEAM_KEY and stick your API key in it
// (or insert it here)
Steam.key = '';
if (Steam.key.length === 0) {
    try { Steam.key = fs.readFileSync('../STEAM_KEY').toString();}
    catch(e) {
        try { Steam.key = fs.readFileSync('./STEAM_KEY').toString(); }
        catch(e) { console.log('No API key provided'); }
    }
}

Steam.ready(function(err) {
    if (err) return console.log(err);
    var steam = new Steam();

    steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {
        console.log(data);
        data.include_appinfo = true;
        data.include_played_free_games=true;
        data.appids_filter="";
        steam.getOwnedGames(data, function(err,data) {
            console.log(data);
        });
    })
});
