const mongoose = require('mongoose');

const weightBMISchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to user
  weight: Number,
  bmi: Number,
  date: Date,
  note: String,
});

const WeightBMI = mongoose.model('WeightBMI', weightBMISchema);

module.exports = WeightBMI;
