const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const AlertsRouter = require('./routes/alerts/alerts.routes');
const ComplainsRouter = require('./routes/complains/complains.routes');
const temp = require('./routes/temperature/temperature');

// Enable CORS for all origins (adjust as needed for production)
app.use(cors()); // Allow CORS for all origins or specify a domain in production
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Define your API routes
app.use('/admin/alerts', AlertsRouter);
app.use('/admin/complains', ComplainsRouter);
app.use('/', temp);

// Catch all other requests and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

module.exports = app;
