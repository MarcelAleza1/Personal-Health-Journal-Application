const express = require('express');
const router = express.Router();
const bloodPressureController = require('../controllers/bloodPressureController');
//const authenticateUser = require('../middlewares/authenticateUser');

router.get('/',  bloodPressureController.getAllBloodPressures);
router.post('/', bloodPressureController.createBloodPressure);
// router.post('/', authenticateUser, bloodPressureController.createBloodPressure);

module.exports = router;
