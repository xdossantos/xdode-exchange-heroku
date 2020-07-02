const express = require('express');
const router = express.Router();

// Note: Wen can use tokens with the request for private views


// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

module.exports = router;
