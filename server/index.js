const express = require('express');
const path = require('path');
const axios = require('axios');
const db = require('../db');
const character = require('./controllers/character');
const episode = require('./controllers/episode');
const location = require('./controllers/location');

const app = express();
const port = 3000;
const url = 'https://rickandmortyapi.com/api';

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// app.get(`${url}/*`, (req, res) => {
//   console.log('url: ', req.url);
//   axios.get(req.url)
//     .then(response => res.send(response.data))
//     .catch(e => res.send(e));
// });

app.post('/characters/*', character.findAndUpdate);

app.get('/characters/*', character.getOne);

app.post('/episodes', episode.add);

app.get('/episodes/*', episode.getOne);

app.listen(port, () => {
  console.log('its working');
});

