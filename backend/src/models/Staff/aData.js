// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   driverName: { type: String, required: true },
//   vehicleType: { type: String, required: true },
//   wardNo: { type: String, required: true },
//   vehicleNumber: { type: String, required: true },
//   startTime: { type: String, required: true },
//   endTime: { type: String, required: true },
//   inChargeName: { type: String, required: true },
//   note: { type: String },
// });

// const Attendance = mongoose.model("Attendance", attendanceSchema);

// module.exports = Attendance;
const mongoose = require("mongoose");

// Define schema for each row in the attendance table
const attendanceRowSchema = new mongoose.Schema({
  driverName: { type: String, required: true },
  vehicleType: { type: String, required: true },
  wardNo: { type: String, required: true },
  vehicleNumber: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  inChargeName: { type: String, required: true },
  note: { type: String },
});

// Main schema for the table, which includes an array of rows
const attendanceSchema = new mongoose.Schema({
  tableName: { type: String, default: "Attendance Table" }, // You can include a table name or other metadata
  rows: [attendanceRowSchema], // Store multiple rows as an array
  createdAt: { type: Date, default: Date.now },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
