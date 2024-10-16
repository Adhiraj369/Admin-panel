const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const AlertsRouter = require('./routes/alerts/alerts.routes');
const ComplainsRouter = require('./routes/complains/complains.routes')
const temp = require('./routes/temperature/temperature')

// Enable CORS for port 3000
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html')); 

app.use(express.json());
app.use('/admin/alerts', AlertsRouter);
app.use('/admin/complains',ComplainsRouter)
app.use('/', temp)


module.exports = app;
