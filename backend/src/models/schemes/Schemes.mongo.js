// models/Scheme.js
const mongoose = require('mongoose');

const schemeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensure IDs are unique
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Scheme', schemeSchema);
