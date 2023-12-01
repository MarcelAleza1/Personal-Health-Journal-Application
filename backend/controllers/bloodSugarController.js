const BloodSugar = require('../models/bloodSugar');

const getAllBloodSugars = async (req, res) => {
  try {
    const userId = req.headers.userId;
    const userBloodSugarData = await BloodSugar.find({ userId });
    res.json(userBloodSugarData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBloodSugar = async (req, res) => {
  try {
    const {userId, glucoseLevel, fasting, mealTime, date, note } = req.body;
    //const userId = req.header.userId;
    const newBloodSugar = await BloodSugar.create({
      userId,
      glucoseLevel,
      fasting,
      mealTime,
      date,
      note,
    });
    res.status(201).json(newBloodSugar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllBloodSugars,
  createBloodSugar,
};
