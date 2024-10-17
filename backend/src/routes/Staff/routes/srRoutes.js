// routes/srRoutes.js

const express = require("express");
const { addSRData, getSRData } = require("../controllers/srController");

const router = express.Router();

router.post("/submit", addSRData);

router.get("/fetch", getSRData);

module.exports = router;
