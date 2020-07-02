const express = require('express');
const router = express.Router();

// In the below code we can define further endpoints for our api

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

module.exports = router;
