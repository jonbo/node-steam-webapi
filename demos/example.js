var Steam = require('../lib/Steam');
var fs = require('fs');

// Create a file called STEAM_KEY and stick your API key in it
var steamAPIKey = fs.readFileSync('./STEAM_KEY').toString();

Steam.ready(steamAPIKey, function(err) {
    if (err) return console.log(err);

    var steam = new Steam({key: steamAPIKey, gameid:Steam.TF2});

    steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {
        console.log(data); // data -> { steamid: '76561197968620915', success: 1 }

        //data.gameid = Steam.TF2;

        // getPlayerItems requires { gameid, steamid }
        steam.getPlayerItems(data, function (err, data) {
            console.log(data); // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}

        });
    });

});

