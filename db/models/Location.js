const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {type: String, default: 'unknown'},
  dimension: {type: String, default: 'unknown'},
  residents: [String]
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;