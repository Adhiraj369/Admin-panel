const { getAllAlerts, addAlert } = require('../../models/alerts/alerts.model');

async function httpgetAllAlerts(req, res) {
    const alerts = await getAllAlerts();
    return res.status(200).json(alerts);
}

async function httpAddAlert(req, res) {
    const { Alert, category } = req.body; // Destructure Alert and category from request body
    if (!Alert || !category) {
        return res.status(400).json({ error: 'Alert and category are required' });
    }

    try {
        const newAlert = await addAlert({ Alert, category }); // Pass the category to addAlert
        return res.status(201).json(newAlert);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = {
    httpgetAllAlerts,
    httpAddAlert,
}
