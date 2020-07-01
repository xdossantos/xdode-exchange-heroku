const express = require('express');
const router = express.Router();

// In the below code we can define further endpoints for our api
router.get('/test', (req, res) => res.json({msg: "Posts custom api Works"}));

module.exports = router;