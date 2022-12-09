var expect = require('chai').expect;
var saveShowMW = require('../middleware/show/saveShowMW');

describe('saveShowMW', function(){
    it('should change res.locals.show.title to req.body.title', function() {
        var req = {
            body: {
                title: "Title",
                description: "Desc"
            }
        };
        var res = {
            locals: {
                show: {
                    title: "",
                    description: "",
                    next: {},
                    _next: {},
                    save: function() {}
                }
            },
            redirect: function() {}
        };
        var fakeShowModel = {
            title: undefined,
            description: undefined,
            next: undefined,
            _next: undefined
        };

        saveShowMW({showModel: fakeShowModel})(req, res, function(err){
            expect(res.locals.show.title).to.equal(req.body.title);
            expect(err).to.eql(undefined);
        });
    });

    it('should not change res.locals.show.title', function() {
        var req = {
            body: {
                title: "Title",
                description: "Desc"
            }
        };
        var res = {
            locals: {
                show: {
                    title: undefined,
                    description: undefined,
                    next: {},
                    _next: {},
                    save: function() {}
                }
            },
            redirect: function() {}
        };
        var fakeShowModel = {
            title: undefined,
            description: undefined,
            next: undefined,
            _next: undefined
        };

        saveShowMW({showModel: fakeShowModel})(req, res, function(err){
            expect(res.locals.show.title).to.eql(res.locals.show.title);
            expect(req.body.title).to.eql(undefined);
            expect(res.locals.show.title).not.to.eql(req.body.title);
            expect(err).to.eql(undefined);
        });
    });
});