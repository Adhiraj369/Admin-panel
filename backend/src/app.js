const express = require("express");
const cors = require("cors");
const app = express();
const AlertsRouter = require('./routes/alerts/alerts.routes');
const ComplainsRouter = require('./routes/complains/complains.routes')
const temp = require('./routes/temperature/temperature')

// Enable CORS for port 3000
app.use(cors({
  origin: 'http://localhost:3000' // Adjust this to match your frontend URL
}));

app.use(express.json());
app.use('/admin/alerts', AlertsRouter);
app.use('/admin/complains',ComplainsRouter)
app.use('/', temp)


module.exports = app;
