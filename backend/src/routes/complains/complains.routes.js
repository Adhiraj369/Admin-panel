const express = require('express');
const {getAllComplaints,getGarbageComplaints,getWaterComplaints,getDeadComplaints} = require('./complains.controller');

const ComplainsRouter = express.Router();

ComplainsRouter.get('/', async (req, res) => {
  try {
    const complaints = await getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching complaints', error });
  }
});

//  route to fetch only water-related complaints
ComplainsRouter.get('/water', async (req, res) => {
  try {
    const complaints = await getWaterComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching water complaints', error });
  }
});

// route to fetch only garbage-related complaints
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
    res.status(500).json({ message: 'Error fetching deadanimals complaints', error });
  }
});

module.exports = ComplainsRouter;

