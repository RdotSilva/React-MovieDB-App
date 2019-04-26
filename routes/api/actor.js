const express = require('express');
const router = express.Router();

// @route GET api/actor/test
// @desc Tests actor route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Actor Works' }));

module.exports = router;
