const express = require('express');
const app = express();
const path = require('path');

require('./routing/index')(app, path);

app.listen(3000, () => {
    console.log('Running on :3000');
});