const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
//const authenticateUser = require('../middleware/authenticateUser');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile',  authController.getUserProfile);
router.post('/logout', authController.logoutUser);

module.exports = router;
