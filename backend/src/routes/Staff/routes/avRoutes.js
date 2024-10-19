const express = require("express");
const router = express.Router();
const { addAVData, getAVData } = require("../controllers/avController");

// Route for adding AV data
router.post("/add", addAVData);

// Route for fetching AV data
router.get("/get", getAVData);

module.exports = router;
