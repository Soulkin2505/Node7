// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mi-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
