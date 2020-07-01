const express = require('express');
const router = express.Router();
// Wen can use tokens with the request for private
// In the below code we can define further endpoints for our api
// @routers   Get api/posts/tests
// @desc      Test post route
// @access    Public

router.get('/test', (req, res) => res.json({msg: "Posts custom api Works"}));

module.exports = router;