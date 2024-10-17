const mongoose = require("mongoose");

// Schema for each row
const avRowSchema = new mongoose.Schema({
  driverName: { type: String, required: true },
  vehicleType: { type: String, required: true },
  wardNo: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  inChargeName: { type: String, required: true },
  note: { type: String, required: false },
});

// Main schema for All Vehicle table data
const avSchema = new mongoose.Schema({
  tableName: { type: String, default: "All Vehicle Table" }, // You can include a table name or other metadata
  rows: [avRowSchema], // Store multiple rows as an array
  createdAt: { type: Date, default: Date.now }, // Automatically set creation date
});

const AVData = mongoose.model("AVData", avSchema);

module.exports = AVData;
