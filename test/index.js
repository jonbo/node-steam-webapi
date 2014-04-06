var fs = require('fs');
var Steam = require('..');

// Create a file called STEAM_KEY and stick your API key in it
// (or insert it here)
var steamAPIKey = '';
try{ steamAPIKey = fs.readFileSync('../STEAM_KEY').toString(); } catch(e) {}
try{ steamAPIKey = fs.readFileSync('./STEAM_KEY').toString(); } catch(e) {}

describe('Node-Steam-WebAPI', function() {
    this.timeout(10000); // Steam is slow sometimes

    describe('Initializing', function() {

        it('(you) should have provided a SteamAPI key', function() {
            steamAPIKey.should.not.be.empty;
        });

        it('should get list of methods (old alternative)', function(done) {
            Steam.ready(steamAPIKey, function(err) {
                if (err) return done(err);

                Steam.prototype.resolveVanityURL.should.be.a.Function;
                Steam.prototype.getPlayerItems.should.be.a.Function;
                Steam.prototype.getFriendList.should.be.a.Function;

                // For the next test
                delete Steam.prototype.resolveVanityURL;
                delete Steam.prototype.getPlayerItems;
                delete Steam.prototype.getFriendList;

                done();
            });
        });

        it('should get list of methods', function(done) {
            Steam.key = steamAPIKey;
            Steam.ready(function(err) {
                if (err) return done(err);

                Steam.prototype.resolveVanityURL.should.be.a.Function;
                Steam.prototype.getPlayerItems.should.be.a.Function;
                Steam.prototype.getFriendList.should.be.a.Function;

                done();
            });
        });

    });

    describe('Retrieve a TF2 backpack', function() {
        it('should work with key in global', function(done) {
            var steam = new Steam({gameid:Steam.TF2});

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
        it('should not work with no key provided', function(done) {
            Steam.key = undefined;
            var steam = new Steam({gameid:Steam.TF2});

            try {
                steam.resolveVanityURL({vanityurl: 'jonbo'}, function (err, data) {
                    if (err) return done(err);
                    steam.getPlayerItems(data, function (err, data) {
                        if (err) return done(err);

                        data.status.should.be.ok;
                        data.items.length.should.be.above(1);
                        done();
                    });
                });
            } catch (e) {
                // should throw
                return done();
            }
            done(new Error('Did not throw error with no key'));
        });

        it('should work with key in instance', function(done) {
            Steam.key = undefined;
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

        it('should work with key in options', function(done) {
            Steam.key = undefined;
            var steam = new Steam({gameid:Steam.TF2});

            steam.resolveVanityURL({key: steamAPIKey, vanityurl:'jonbo'}, function(err, data) {
                if (err) return done(err);

                data.key = steamAPIKey;
                steam.getPlayerItems(data, function (err, data) {
                    if (err) return done(err);

                    data.status.should.be.ok;
                    data.items.length.should.be.above(1);
                    done();
                });
            });
        });


    });
    describe('Special cases', function() {
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

});