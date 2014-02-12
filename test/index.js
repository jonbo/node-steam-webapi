var fs = require('fs');
var Steam = require('..');

// Create a file called STEAM_KEY and stick your API key in it
// (or insert it here)
var steamAPIKey = '';
try{ steamAPIKey = fs.readFileSync('../STEAM_KEY').toString(); } catch(e) {}
try{ steamAPIKey = fs.readFileSync('./STEAM_KEY').toString(); } catch(e) {}

describe('Node-Steam-WebAPI', function() {

    it('(you) should have provided a SteamAPI key', function() {
        steamAPIKey.should.not.be.empty;
    });

    it('should get list of methods', function(done) {
        Steam.ready(steamAPIKey, function(err) {
            if (err) return done(err);

            Steam.prototype.resolveVanityURL.should.be.a.Function;
            Steam.prototype.getPlayerItems.should.be.a.Function;
            Steam.prototype.getFriendList.should.be.a.Function;

            done();
        });
    });

    it('should return a tf2 backpack', function(done) {
        this.timeout(10000); // sometimes this is slow
        var steam = new Steam({key: steamAPIKey, gameid:Steam.TF2});

        steam.resolveVanityURL({vanityurl:'jonbo'}, function(err, data) {
            if (err) return done(err);
            steam.getPlayerItems(data, function (err, data) {
                if (err) return done(err);

                data.status.should.be.ok;
                data.items.length.should.be.above(1);
                done();
            });
        });
    });

    it('should work with array arguments and POST methods', function(done) {
        var steam = new Steam({key:steamAPIKey});
        steam.getPublishedFileDetails(
            {publishedfileids:[173705800, 173705716], itemcount:2},
            function(err, data) {
                data.publishedfiledetails.should.have.lengthOf(2);
                done();
            }
        );
    });

});