const express = require('express');
const router = express.Router();

router.post('/sos', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    res.status(200).json({
      message: 'SOS alert sent successfully',
      latitude,
      longitude
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  latitude: Number,
  longitude: Number,
  status: {
    type: String,
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Alert', AlertSchema);