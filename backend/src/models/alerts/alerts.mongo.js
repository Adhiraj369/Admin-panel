const mongoose = require('mongoose');

const AlertsSchema = new mongoose.Schema({
    Alert: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Alert', AlertsSchema);
