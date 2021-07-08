const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // eslint-disable-next-line camelcase
  air_date: String,
  episodeId: String,
  episode: String,
  characters: [String],
  image: String
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;