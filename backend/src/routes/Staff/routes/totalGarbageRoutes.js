// routes/totalGarbageRoutes.js
const express = require("express");
const {
  addTotalGarbageData,
  getTotalGarbageData,
} = require("../controllers/totalGarbageController");

const router = express.Router();

// Route to add data
router.post("/add", addTotalGarbageData);

// Route to get data
router.get("/get", getTotalGarbageData);

module.exports = router;
