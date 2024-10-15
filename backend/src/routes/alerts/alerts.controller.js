const { getAllAlerts, addAlert } = require('../../models/alerts/alerts.model');

async function httpgetAllAlerts(req, res) {
    const alerts = await getAllAlerts();
    return res.status(200).json(alerts);
}

async function httpAddAlert(req, res) {
    const alertData = req.body;
    try {
        const newAlert = await addAlert(alertData);
        return res.status(201).json(newAlert);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = {
    httpgetAllAlerts,
    httpAddAlert,
}
