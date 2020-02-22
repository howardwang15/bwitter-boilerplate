const express = require('express');
const router = express.Router();
const { bweetModule } = require('../../../db');


/**
 * TODO: add check for id in reqest body
 */
router.route('/:id?').get(async (req, res, next) => {
    return res.json({ });
});


router.route('/user/:handle').get(async (req, res, next) => {
    const handle = req.params.handle;
    const data = await bweetModule.findBweetByHandle(handle);
    return res.json({ data });
});


/**
 * TODO: add call to module to add bweet to collection
 */
router.route('/add').post(async (req, res, next) => {

});

module.exports = { router };
