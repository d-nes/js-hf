const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/index.html'));
})

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/show_details.html'));
})

app.get('/new_show', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/new_show.html'));
})

app.get('/edit_show', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/edit_show.html'));
})

app.get('/new_episode', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/new_episode.html'));
})

app.get('/edit_episode', (req, res) => {
    res.sendFile(path.join(__dirname, 'source/edit_episode.html'));
})

app.listen(3000, () => {
    console.log('Running on :3000');
});