const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: String,
  location: String,
  image: {
    type: String,
    default: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'},
  episodes: [String],
  summary: String,
  _id: { type: String, required: true }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;