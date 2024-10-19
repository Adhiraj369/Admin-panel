const express = require("express");
const router = express.Router();
const maintenanceController = require("../controllers/maintenanceController");

router.post("/add", maintenanceController.addMaintenanceData);
router.get("/get", maintenanceController.getMaintenanceData);

module.exports = router;
