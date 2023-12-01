const mongoose = require('mongoose');

const weightBMISchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  weight: Number,
  bmi: Number,
  date: Date,
  note: String,
});

const WeightBMI = mongoose.model('WeightBMI', weightBMISchema);

module.exports = WeightBMI;
