const Schema = require('mongoose').Schema;
const db = require('../config/db');

var Show = db.model('Show', {
    title: String,
    description: String,
    _next: {
        type: Schema.Types.ObjectId,
        ref: 'Episode'
    }
});

module.exports = Show;