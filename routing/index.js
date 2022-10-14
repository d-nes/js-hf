const renderMW = require('../middleware/renderMW');

module.exports = function (app, path) {
    app.get('/',
        renderMW('index', path));
    app.get('/details', 
        renderMW('show_details', path));
    app.get('/new_show',
        renderMW('new_show', path));
    app.get('/edit_show',
        renderMW('edit_show', path));
    app.get('/new_episode',
        renderMW('new_episode', path));
    app.get('/edit_episode',
        renderMW('edit_episode', path));
}