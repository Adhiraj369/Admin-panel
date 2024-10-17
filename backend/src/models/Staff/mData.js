const mongoose = require("mongoose");

// Schema for each row in Maintenance data
const maintenanceRowSchema = new mongoose.Schema({
  driverName: { type: String, required: true },
  vehicleType: { type: String, required: true },
  wardNo: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  maintenanceTime: { type: String, required: true },
  details: { type: String, required: true },
  inChargeName: { type: String, required: true },
  note: { type: String, required: false },
});

// Main schema for Maintenance table data
const maintenanceSchema = new mongoose.Schema({
  tableName: { type: String, default: "Maintenance Table" }, // Optional metadata for table name
  rows: [maintenanceRowSchema], // Array of rows
  createdAt: { type: Date, default: Date.now }, // Automatically sets the creation date
});

const MaintenanceData = mongoose.model("MaintenanceData", maintenanceSchema);

module.exports = MaintenanceData;
