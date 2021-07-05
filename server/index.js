const express = require('express');
const path = require('path');
const axios = require('axios');
const db = require('../db');

const app = express();
const port = 3000;
const url = 'https://rickandmortyapi.com/api';

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/*', (req, res) => {
  axios.get(url + req.url)
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});


app.listen(port, () => {
  console.log('its working');
});

