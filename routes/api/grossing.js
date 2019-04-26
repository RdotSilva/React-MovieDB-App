const express = require('express');
const router = express.Router();

// @route GET api/grossing/test
// @desc Tests grossing route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Grossing Works' }));

module.exports = router;
