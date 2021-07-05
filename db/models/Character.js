const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: String,
  location: String,
  image: String,
  episodes: [String]
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;