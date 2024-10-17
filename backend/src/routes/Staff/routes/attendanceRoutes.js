const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

// Route to add attendance data
router.post("/add", attendanceController.addAttendance);

// Route to get attendance data
router.get("/get", attendanceController.getAttendance);

module.exports = router;
