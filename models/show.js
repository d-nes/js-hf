const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Show = db.model('Show', {
    title: String,
    description: String
});

module.exports = Show;