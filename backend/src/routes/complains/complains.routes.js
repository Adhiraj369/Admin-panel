const express = require('express');
const Complain = require('../../models/complains/complains.mongo')
const {
  getAllComplaints,
  getGarbageComplaints,
  getWaterComplaints,
  getDeadComplaints,
  markComplaintAsSolved,
} = require('./complains.controller');

const ComplainsRouter = express.Router();

ComplainsRouter.get('/', async (req, res) => {
  try {
    const complaints = await getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching complaints', error });
  }
});

ComplainsRouter.get('/water', async (req, res) => {
  try {
    const complaints = await getWaterComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching water complaints', error });
  }
});

ComplainsRouter.get('/garbage', async (req, res) => {
  try {
    const complaints = await getGarbageComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching garbage complaints', error });
  }
});

ComplainsRouter.get('/dead', async (req, res) => {
  try {
    const complaints = await getDeadComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dead complaints', error });
  }
});

// Route to mark a complaint as solved
ComplainsRouter.post('/mark-solved/:id', async (req, res) => {
  try {
    const updatedComplaint = await markComplaintAsSolved(req.params.id);
    res.status(200).json(updatedComplaint);
    
    // Automatically update the status after 3 days (259200000 milliseconds)
    setTimeout(async () => {
      await Complain.findByIdAndUpdate(req.params.id, { Status: 1 });
    }, 259200000); // 3 days in milliseconds
  } catch (error) {
    res.status(500).json({ message: 'Error marking complaint as solved', error });
  }
});

module.exports = ComplainsRouter;
