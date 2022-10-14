const renderMW = require('../middleware/renderMW');
const saveShowMW = require('../middleware/show/saveShowMW');
const delShowMW = require('../middleware/show/delShowMW');
const getShowMW = require('../middleware/show/getShowMW');
const getShowListMW = require('../middleware/show/getShowListMW');
const saveEpisodeMW = require('../middleware/episode/saveEpisodeMW');
const delEpisodeMW = require('../middleware/episode/delEpisodeMW');
const getEpisodeMW = require('../middleware/episode/getEpisodeMW');
const getEpisodeListMW = require('../middleware/episode/getEpisodeListMW');

module.exports = function (app, path) {
    const objects = {};

    app.get('/',
        getShowListMW(objects),
        renderMW('index', path, objects));

    app.get('/details', 
        getEpisodeListMW(objects),
        renderMW('show_details', path, objects));

    app.get('/new_show',
        saveShowMW(objects),
        renderMW('new_show', path, objects));

    app.get('/edit_show',
        getShowMW(objects),
        saveShowMW(objects),
        renderMW('edit_show', path, objects));

    app.get('/new_episode',
        saveEpisodeMW(objects),
        renderMW('new_episode', path, objects));

    app.get('/edit_episode',
        getEpisodeMW(objects),
        saveEpisodeMW(objects),
        renderMW('edit_episode', path, objects));
}