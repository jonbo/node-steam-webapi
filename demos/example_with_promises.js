var Steam = require('..');
var fs = require('fs');
var Promise = require('bluebird');

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

    // Creates an promise wielding function for every method (with Async attached at the end)
    Promise.promisifyAll(Steam.prototype);

    var steam = new Steam({key: steamAPIKey});

    steam.resolveVanityURLAsync({vanityurl:'jonbo'}).bind(steam)
    .then(function(data) {
        console.log(data); // data -> { steamid: '76561197968620915', success: 1 }
        data.gameid = Steam.TF2;
        return data;
    })
    .then(steam.getPlayerItemsAsync)
    .then(function(data) {
        console.log(data); // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}
    });

});


