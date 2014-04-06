Steam WebAPI library for node.js
==========================
*Supports Node v0.8.26 (or newer) but might work on older versions*

A [Steam API Key](http://steamcommunity.com/dev/apikey) is needed for many of the methods in the API and is a requirement for this library.

All the methods are created at runtime (available after Steam.ready, which retrieves the API methods), rather than compile-time, so this should theoretically support all (existing and future) Steam API methods.
No need to worry about calling the correct API version, as it will always be the latest. If you must use a different version simply pass in a {'version': x} option into a method.


[List of methods](https://github.com/jonbo/node-steam-webapi/blob/master/api_method_list.md)

To install:

    npm install steam-webapi

## Example

```js
var Steam = require('steam-webapi');

// Set global Steam API Key
Steam.key = "YOUR API KEY";

Steam.ready(function(err) {
    if (err) return console.log(err);

    var steam = new Steam();

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {
        console.log(data);
        // data -> { steamid: '76561197968620915', success: 1 }

        // Get the Player's TF2 Backpack items
        data.gameid = Steam.TF2;

        // getPlayerItems requires { gameid, steamid }
        steam.getPlayerItems(data, function (err, data) {
            console.log(data);
            // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}

        });
    });

});
```

## Example with generators and promises

```js
// Requires node 0.11+ and "node --harmony"

var Steam = require('steam-webapi');
var Promise = require('bluebird');

// Set global Steam API Key
Steam.key = "YOUR API KEY";

Steam.ready(Promise.coroutine(function*(err) {
    if (err) return console.log(err);

    // Creates an promise wielding function for every method (with Async attached at the end)
    Promise.promisifyAll(Steam.prototype);

    var steam = new Steam();

    // Retrieve the steam ID from a steam username/communityID
    var data = yield steam.resolveVanityURLAsync({vanityurl:'jonbo'});
    console.log(data);
    // data -> { steamid: '76561197968620915', success: 1 }

    // Get the Player's TF2 Backpack items
    data.gameid = Steam.TF2;
    data = yield steam.getPlayerItemsAsync(data);
    console.log(data);
    // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}

}));
```


If you plan on only using this for TF2 data only (or just want to default to it), the first example can be rewritten.

```js
var steam = new Steam({gameid: Steam.TF2, appid:Steam.TF2});

steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {

    // No need for data.gameid = Steam.TF2; here

    steam.getPlayerItems(data, function (err, data) {
        console.log(data);
        // data -> { status: 1, num_backpack_slots: 1100, items: [...], ...}
    });
});
```

It works the same for 'key' and other fields.

# Tests
```
$ make test
```

# License

  MIT