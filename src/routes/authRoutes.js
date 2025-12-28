const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { 
  validateUserRegistration, 
  validateUserLogin, 
  validate 
} = require('../utils/validation');

// Public routes
router.post('/register', validateUserRegistration, validate, authController.register);
router.post('/login', validateUserLogin, validate, authController.login);

// Protected route
router.get('/me', protect, authController.getMe);

module.exports = router;