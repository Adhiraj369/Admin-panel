const mongoose = require('mongoose');

const ComplainsSchema = new mongoose.Schema({
  Category: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Status: {
    type: Number,
    required: true,
  },
  Burst: {
    type: Number,
    required: true,
  },
  Lat: {
    type: Number,
    required: true,
  },
  Long: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Complain', ComplainsSchema);
