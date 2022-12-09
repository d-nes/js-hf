const Schema = require('mongoose').Schema;
const db = require('../config/db');

var Show = db.model('Show', {
    title: String,
    description: String,
    next: String,
    _next: String
});

module.exports = Show;