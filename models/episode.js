const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Episode = db.model('Episode', {
    title: String,
    season: Number,
    episode: Number,
    seen: Boolean,
    _show: {
        type: Schema.Types.ObjectId,
        ref: 'Show'
    }
});

module.exports = Episode;