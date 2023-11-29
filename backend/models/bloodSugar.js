const mongoose = require('mongoose');

const bloodSugarSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  glucoseLevel: Number,
  fasting: Boolean,
  mealTime: String,
  date: Date,
  note: String,
});

const BloodSugar = mongoose.model('BloodSugar', bloodSugarSchema);

module.exports = BloodSugar;
