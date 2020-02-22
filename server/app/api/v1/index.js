const express = require('express');
const router = express.Router();


router.use('/bweet', require('./bweet').router);
router.use('/user', require('./user').router);

module.exports = { router };