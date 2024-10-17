const express = require("express");
const router = express.Router();
const { addAVData, getAVData } = require("../controllers/avController");

// Route for adding AV data
router.post("/submit", addAVData);

// Route for fetching AV data
router.get("/fetch", getAVData);

module.exports = router;
