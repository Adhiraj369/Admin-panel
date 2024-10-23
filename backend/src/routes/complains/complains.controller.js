const Complain = require('../../models/complains/complains.mongo');

const getWaterComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: 'water' });
    return complaints;
  } catch (error) {
    console.error('Error fetching water complaints:', error);
    throw error;
  }
};

const getGarbageComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: 'garbage' });
    return complaints;
  } catch (error) {
    console.error('Error fetching garbage complaints:', error);
    throw error;
  }
};

const getDeadComplaints = async () => {
  try {
    const complaints = await Complain.find({ Category: 'dead' });
    return complaints;
  } catch (error) {
    console.error('Error fetching dead complaints:', error);
    throw error;
  }
};

const getAllComplaints = async () => {
  try {
    const complaints = await Complain.find({});
    return complaints;
  } catch (error) {
    console.error('Error fetching all complaints:', error);
    throw error;
  }
};

// Function to mark a complaint as solved
const markComplaintAsSolved = async (id) => {
  try {
    const updatedComplaint = await Complain.findByIdAndUpdate(
      id,
      { Burst: 1 },
      { new: true }
    );
    return updatedComplaint;
  } catch (error) {
    console.error('Error marking complaint as solved:', error);
    throw error;
  }
};

// Export the functions for use in other parts of the app
module.exports = {
  getWaterComplaints,
  getGarbageComplaints,
  getDeadComplaints,
  getAllComplaints,
  markComplaintAsSolved,
};
