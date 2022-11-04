const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/topkqh', { useNewUrlParser: true });

module.exports = mongoose;