// This will many more different links than the users module

const express = require('express');
const router = express.Router();


// In the below code we can define further endpoints for our api
// @routers   Get api/profile/tests
// @desc      Test profile route
// @access    Public

// In the below code we can define further endpoints for our api
router.get('/test', (req, res) => res.json({msg: "Profile custom api Works"}));

module.exports = router;