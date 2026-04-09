const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/sakhishield')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('SakhiShield API Running');
});

app.post('/api/alerts/sos', (req, res) => {
  const { latitude, longitude } = req.body;

  console.log('SOS Alert:', latitude, longitude);

  res.json({
    message: 'SOS alert triggered successfully',
    location: {
      latitude,
      longitude
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const User = require('./models/User');
const Alert = require('./models/Alert');
app.get('/', (req, res) => {
  res.send('SakhiShield API Running');
});