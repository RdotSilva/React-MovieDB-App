const express = require('express');
const router = express.Router();

// @route GET api/movie/test
// @desc Tests movie route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Movie Works' }));

module.exports = router;
