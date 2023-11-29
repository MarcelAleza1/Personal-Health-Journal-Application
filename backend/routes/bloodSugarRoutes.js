const express = require('express');
const router = express.Router();
const bloodSugarController = require('../controllers/bloodSugarController');
//const authenticateUser = require('../middleware/authenticateUser');

router.get('/', bloodSugarController.getAllBloodSugars);
router.post('/',  bloodSugarController.createBloodSugar);

module.exports = router;
