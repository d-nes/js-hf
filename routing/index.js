const { Console } = require('console');
const { appendFileSync } = require('fs');
const path = require('path');
const renderMW = require('../middleware/renderMW');

module.exports = function (app) {
    /*
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/index.html'));
    })
    */
    app.get('/',
        renderMW("index"));

    app.get('/details', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/show_details.html'));
    })

    app.get('/new_show', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/new_show.html'));
    })

    app.get('/edit_show', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/edit_show.html'));
    })

    app.get('/new_episode', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/new_episode.html'));
    })

    app.get('/edit_episode', (req, res) => {
        res.sendFile(path.join(__dirname, '../source/edit_episode.html'));
    })
}