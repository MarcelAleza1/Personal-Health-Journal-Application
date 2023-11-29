const express = require('express');
const router = express.Router();
const weightBMIController = require('../controllers/weightBMIController');
//const authenticateUser = require('../middleware/authenticateUser');

router.get('/', weightBMIController.getAllWeightBMI);
router.post('/', weightBMIController.createWeightBMI);

module.exports = router;
