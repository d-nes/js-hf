const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

require('./routing/index')(app, path);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Running on :3000');
});