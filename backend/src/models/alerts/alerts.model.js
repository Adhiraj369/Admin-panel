const alerts = require('./alerts.mongo');

async function getAllAlerts() {
    return await alerts.find({}, {
        '_id': 0, '__v': 0,
    });
}

async function getNextId() {
    const lastAlert = await alerts.findOne().sort('-id').exec();
    return lastAlert ? lastAlert.id + 1 : 1; // Start with id 1 if no alerts exist
}

async function addAlert(alertData) {
    const newId = await getNextId();
    const newAlert = new alerts({
        ...alertData,
        id: newId
    });
    return await newAlert.save();
}

module.exports = {
    getAllAlerts,
    addAlert,
}
