const renderMW = require('../middleware/renderMW');
const saveShowMW = require('../middleware/show/saveShowMW');
const delShowMW = require('../middleware/show/delShowMW');
const getShowMW = require('../middleware/show/getShowMW');
const getShowListMW = require('../middleware/show/getShowListMW');
const saveEpisodeMW = require('../middleware/episode/saveEpisodeMW');
const delEpisodeMW = require('../middleware/episode/delEpisodeMW');
const getEpisodeMW = require('../middleware/episode/getEpisodeMW');
const getEpisodeListMW = require('../middleware/episode/getEpisodeListMW');
const markEpisodeMW = require('../middleware/episode/markEpisodeMW');

const showModel = require('../models/show');
const episodeModel = require('../models/episode');

module.exports = function (app, path) {
    var objects = {
        showModel: showModel,
        episodeModel: episodeModel
    };

    app.use('/new_show',
        saveShowMW(objects),
        renderMW('new_show', path, objects));
        
    app.use('/show/:showid/edit',
        getShowMW(objects),
        saveShowMW(objects),
        renderMW('edit_show', path, objects));

    app.use('/show/:showid/new_episode',
        getShowMW(objects),
        saveEpisodeMW(objects),
        renderMW('new_episode', path, objects));

    app.use('/show/:showid/:episodeid/edit',
        getShowMW(objects),
        getEpisodeMW(objects),
        saveEpisodeMW(objects),
        renderMW('edit_episode', path, objects));
        
    app.use('/show/:showid/delete',
        getShowMW(objects),
        delShowMW(objects));
        
    app.use('/show/:showid/:episodeid/delete',
        getShowMW(objects),
        getEpisodeMW(objects),
        delEpisodeMW(objects));

    app.get('/show/:showid/:episodeid/:next/mark',
        getShowMW(objects),
        getEpisodeMW(objects),
        markEpisodeMW(objects, true));

    app.get('/show/:showid/:episodeid/:next/unmark',
        getShowMW(objects),
        getEpisodeMW(objects),
        markEpisodeMW(objects, false));
        
    app.get('/show/:showid',
        getShowMW(objects),
        getEpisodeListMW(objects),
        renderMW('show_details', path, objects));
        
    app.get('/',
        getShowListMW(objects),
        renderMW('index', path, objects));
}