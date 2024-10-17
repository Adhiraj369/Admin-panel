const TotalGarbageData = require("../../../models/Staff/tgData");

exports.addTotalGarbageData = async (req, res) => {
  try {
    const rows = req.body.rows;
    if (!rows || !Array.isArray(rows)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    console.log("Total Garbage Rows received:", rows);

    // Save the entire array of rows as one document with table metadata
    const savedEntry = await TotalGarbageData.create({ rows });

    res.status(200).json(savedEntry);
  } catch (error) {
    console.error("Error occurred while saving Total Garbage data:", error);
    res
      .status(500)
      .json({ message: "Error saving data", error: error.message });
  }
};

exports.getTotalGarbageData = async (req, res) => {
  try {
    const rows = await TotalGarbageData.find();
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
