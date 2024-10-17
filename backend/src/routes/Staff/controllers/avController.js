const AllVehicleData = require("../../../models/Staff/avData");

exports.addAVData = async (req, res) => {
  try {
    const rows = req.body.rows;
    if (!rows || !Array.isArray(rows)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    console.log("All Vehicle Rows received:", rows);

    const savedRows = await AllVehicleData.insertMany(rows);

    res.status(200).json(savedRows);
  } catch (error) {
    console.error("Error occurred while saving All Vehicle data:", error);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
};

exports.getAVData = async (req, res) => {
  try {
    const rows = await AllVehicleData.find();
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
