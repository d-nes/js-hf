const express = require('express');
const app = express();

require('./routing/index')(app);

app.listen(3000, () => {
    console.log('Running on :3000');
});