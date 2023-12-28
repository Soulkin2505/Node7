// models.js
const mongoose = require('./db');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  year: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
