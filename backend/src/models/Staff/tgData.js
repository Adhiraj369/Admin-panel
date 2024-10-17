const mongoose = require("mongoose");

// Schema for each row in Total Garbage data
const totalGarbageRowSchema = new mongoose.Schema({
  weightCollected: { type: String, required: true },
  wardNo: { type: String, required: true },
  inChargeName: { type: String, required: true },
  note: { type: String },
});

// Main schema for Total Garbage table data
const totalGarbageSchema = new mongoose.Schema({
  tableName: { type: String, default: "Total Garbage Table" }, // Optional metadata for table name
  rows: [totalGarbageRowSchema], // Array of rows
  createdAt: { type: Date, default: Date.now }, // Automatically sets the creation date
});

const TotalGarbageData = mongoose.model("TotalGarbageData", totalGarbageSchema);

module.exports = TotalGarbageData;
