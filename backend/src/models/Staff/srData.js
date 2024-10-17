const mongoose = require("mongoose");

// Schema for each row in Staff Report data
const staffReportRowSchema = new mongoose.Schema({
  staffName: { type: String, required: true },
  wardNo: { type: String, required: true },
  inChargeName: { type: String, required: true },
  note: { type: String, required: true },
});

// Main schema for Staff Report table data
const staffReportSchema = new mongoose.Schema({
  tableName: { type: String, default: "Staff Report Table" }, // Optional metadata for table name
  rows: [staffReportRowSchema], // Array of rows
  createdAt: { type: Date, default: Date.now }, // Automatically sets the creation date
});

const StaffReportData = mongoose.model("StaffReportData", staffReportSchema);

module.exports = StaffReportData;
