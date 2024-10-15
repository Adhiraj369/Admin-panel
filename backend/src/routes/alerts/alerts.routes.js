const express = require('express');
const { httpgetAllAlerts, httpAddAlert } = require('./alerts.controller');

const AlertsRouter = express.Router();

AlertsRouter.get('/', httpgetAllAlerts);
AlertsRouter.post('/', httpAddAlert);

module.exports = AlertsRouter;