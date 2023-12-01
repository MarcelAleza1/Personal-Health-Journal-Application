const mongoose = require('mongoose');

const bloodPressureSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  systolic: Number,
  diastolic: Number,
  pulse: Number,
  note: String,
});

const BloodPressure = mongoose.model('BloodPressure', bloodPressureSchema);

module.exports = BloodPressure;
