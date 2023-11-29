const BloodPressure = require('../models/bloodPressure');

const getAllBloodPressures = async (req, res) => {
  try {
    const userId = req.user.id;
    const userBloodPressureData = await BloodPressure.find({ userId });
    res.json(userBloodPressureData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBloodPressure = async (req, res) => {
  try {
    const { systolic, diastolic, pulse, note } = req.body;
    const userId = req.user.id;
    const newBloodPressure = await BloodPressure.create({
      userId,
      systolic,
      diastolic,
      pulse,
      note,
    });
    res.status(201).json(newBloodPressure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getAllBloodPressures,
  createBloodPressure,
};
