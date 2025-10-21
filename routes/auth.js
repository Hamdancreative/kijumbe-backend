const express = require('express');
const router = express.Router();

// Simple temporary routes - no database
router.post('/signup', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Signup endpoint works!',
    data: {
      _id: 'temp_id',
      name: req.body.name,
      email: req.body.email,
      token: 'temp_jwt_token'
    }
  });
});

router.post('/signin', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Signin endpoint works!',
    data: {
      _id: 'temp_id',
      name: 'Test User',
      email: req.body.email,
      token: 'temp_jwt_token'
    }
  });
});

router.post('/forgot-password', (req, res) => {
  res.json({ success: true, message: 'Forgot password endpoint works!' });
});

router.post('/reset-password', (req, res) => {
  res.json({ success: true, message: 'Reset password endpoint works!' });
});

module.exports = router;