const MaintenanceData = require("../../../models/Staff/mData");

exports.addMaintenanceData = async (req, res) => {
  try {
    const rows = req.body.rows;
    if (!rows || !Array.isArray(rows)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    console.log("Maintenance Rows received:", rows);

    // Save the entire array of rows as one document with table metadata
    const savedEntry = await MaintenanceData.create({ rows });

    res.status(200).json(savedEntry);
  } catch (error) {
    console.error("Error occurred while saving Maintenance data:", error);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
};

exports.getMaintenanceData = async (req, res) => {
  try {
    const rows = await MaintenanceData.find();
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
