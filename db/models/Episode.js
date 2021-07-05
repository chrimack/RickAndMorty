const mogoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // eslint-disable-next-line camelcase
  air_date: String,
  episode: String,
  characters: [String],
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode;