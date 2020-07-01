const express = require('express');
const router = express.Router();

// In the below code we can define further endpoints for our api. We can use post or whatever else

// In the below code we can define further endpoints for our api
// @routers   Get api/users/tests
// @desc      Test users route
// @access    Public

router.get('/test', (req, res) => res.json({msg: "Users custom api Works"
})); // This automatically server a status 200

// You can use Postman to test the API


module.exports = router;