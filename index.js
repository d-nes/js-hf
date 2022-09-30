const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

//app.use(express.static('static'));

app.listen(3000, () => {
    console.log('Running on :3000');
});