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

    var steam = new Steam({key: steamAPIKey});


    steam.getLeagueListing({gameid:Steam.DOTA2}, function(err, listing) {
        console.log("Without 'language' field:");
        console.log(listing);
    });

    steam.getLeagueListing({gameid:Steam.DOTA2, language:'en'}, function(err, listing) {
        console.log("With 'language' field:");
        console.log(listing);
    });
});