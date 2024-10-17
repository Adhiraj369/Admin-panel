const AttendanceData = require("../../../models/Staff/aData");

exports.addAttendance = async (req, res) => {
  try {
    const rows = req.body.rows;
    if (!rows || !Array.isArray(rows)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    console.log("Attendance Rows received:", rows);

    // Create a new document with the entire table (multiple rows)
    const newAttendanceTable = new AttendanceData({
      tableName: "Attendance Table", // Optional: You can add metadata like table name
      rows: rows, // Save the array of rows
    });

    const savedTable = await newAttendanceTable.save();

    res.status(200).json(savedTable);
  } catch (error) {
    console.error("Error occurred while saving attendance data:", error);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
};

// No change is needed for the getAttendance method
exports.getAttendance = async (req, res) => {
  try {
    const tables = await AttendanceData.find(); // Retrieves all attendance tables
    res.status(200).json({ success: true, data: tables });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
