var Steam = require('steam-webapi');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express');

// sets your key to var
var steamAPIKey = "<key>";

var app = express(); // creates server
var metadataArray = [ ];

Steam.ready(steamAPIKey, function(err) {
    if (err) return console.log(err);

    var steam = new Steam({key: steamAPIKey});

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'<steam_usn>'}, function(err, data) {
        console.log(data);
        // data -> { steamid: '76561197968620915', success: 1 }

        // sets the game ID to Dota2
        data.gameid = Steam.DOTA2;

        // gets heroes from Dota2
        steam.getHeroes(data, function (err, data) {
            console.log(data);
            // {heroes: [ {name: 'npc_dota_hero_antimage', id:1} ... ]}

            metadataArray.push(data); // sends it to an array

        });
    });

});

app.get('/dota_info', function(req, res){
  res.send(JSON.stringify(metadataArray, null, 4)); // sends this to the server
});


app.listen(8080); // listens to port 8080
