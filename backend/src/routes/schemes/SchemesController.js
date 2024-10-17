// controllers/schemeController.js
const Scheme = require('../../models/schemes/Schemes.mongo');

// Function to generate a new ID for the scheme
const generateId = async () => {
  const maxScheme = await Scheme.findOne().sort({ id: -1 }); // Find the scheme with the highest ID
  return maxScheme ? maxScheme.id + 1 : 1; // Return the next ID or 1 if no schemes exist
};

// Function to create a new scheme
exports.createScheme = async (req, res) => {
  const { name, description, url, category } = req.body;

  try {
    const id = await generateId();
    const newScheme = new Scheme({ id, name, description, url, category });
    const savedScheme = await newScheme.save();

    res.status(201).json(savedScheme);
  } catch (error) {
    res.status(500).json({ error: 'Error saving scheme' });
  }
};

// Function to fetch all schemes
exports.getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find(); // Fetch all schemes
    res.status(200).json(schemes); // Send the schemes as a response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching schemes' });
  }
};
