const WeightBMI = require('../models/weightBMI');

const getAllWeightBMI = async (req, res) => {
  try {
    const userId = req.headers.userId;
    const userWeightBMI = await WeightBMI.find({ userId });
    res.json(userWeightBMI);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createWeightBMI = async (req, res) => {
  try {
    const {userId, weight, bmi, date, note } = req.body;
    //const userId = req.header.userId;
    const newWeightBMI = await WeightBMI.create({
      userId,
      weight,
      bmi,
      date,
      note,
    });
    res.status(201).json(newWeightBMI);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllWeightBMI,
  createWeightBMI,
};
