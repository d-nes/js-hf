var expect = require('chai').expect;
var markEpisodeMW = require('../middleware/episode/markEpisodeMW');

describe('markEpisodeMW', function() {
    it('should change res.locals.episode.seen to true', function() {
        var req = {
            params: {
                showid: "showid",
                episodeid: "episodeid"
            }
        };
        var res = {
            locals: {
                episode: {
                    seen: false,
                    save: function() {}
                },
                show: {
                    _id: "showid"
                }
            },
            redirect: function(String) {}
        };

        markEpisodeMW(undefined, true)(req, res, function(err) {
            expect(res.locals.episode.seen).to.eql(true);
            expect(err).to.eql(undefined);
        });
    });

    it('should change res.locals.episode.seen to false', function() {
        var req = {
            params: {
                showid: "showid",
                episodeid: "episodeid"
            }
        };
        var res = {
            locals: {
                episode: {
                    seen: true,
                    save: function() {}
                },
                show: {
                    _id: "showid"
                }
            },
            redirect: function(String) {}
        };

        markEpisodeMW(undefined, false)(req, res, function(err) {
            expect(res.locals.episode.seen).to.eql(false);
            expect(err).to.eql(undefined);
        });
    });
});