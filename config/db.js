const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/topkqh', { useNewUrlParser: true });

module.exports = mongoose;