const express = require("express");
const router = express.Router();
const maintenanceController = require("../controllers/maintenanceController");

router.post("/submit", maintenanceController.addMaintenanceData);
router.get("/data", maintenanceController.getMaintenanceData);

module.exports = router;
