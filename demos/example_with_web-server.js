// this will pull data using the STEAM API and display it as JSON on a web server
// using the callback info if a new hero is added since the last time the server is
// refreshed it will update with a simple page refresh

// sets up the modules
var Steam = require('steam-webapi');
var express = require('express');

// sets your key to var
var steamAPIKey = "84E02F1B45E5C2655871C427A03D9883";

var app = express(); // creates server

Steam.ready(steamAPIKey, function(err) {
    if (err) return console.log(err);

    var steam = new Steam({key: steamAPIKey});

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'howdoiskill'}, function(err, data) {
        // data -> { steamid: '76561197968620915', success: 1 }
        var metadataArray = []; // initializes the array
        console.log(data);

        // sets the game ID to Dota2
        data.gameid = Steam.DOTA2;

        // gets heroes from Dota2
        steam.getHeroes(data, function (err, data) {
            console.log(data);  // {heroes: [ {name: 'npc_dota_hero_antimage', id:1} ... ]}

            // this array will be manipulatable by calling an index and then a property
            metadataArray.push(data); // sends it to an array so the JSON can be displayed on the page/used easier


        }); // end of steam.getHeroes

        app.get('/', function(req, res){
          res.send(JSON.stringify(metadataArray, null, 4)); // sends this to the server
        }); // end of app.get

    }); // end of steam.resolveVanity URL



}); // end of steam.ready






app.listen(8080); // listens to port 8080
