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
    },
    category: {
        type: String,
        enum: ['General Alert', 'Emergency Alert', 'Weather Alert'], // Allow only these values
        required: true,
    }
});

module.exports = mongoose.model('Alert', AlertsSchema);
