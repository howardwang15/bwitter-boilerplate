const express = require('express');
const router = express.Router();
const userModule = require('../../../db').userModule;



// TODO: add route to get bweet by id, or get all bweets


router.get('/handle/:handle', (async (req, res, next) => {
    try {
        const user = await userModule.findUserByHandle(req.params.handle);
        return res.json({ user, error: null });
    } catch(e) {
        return res.json({ user: null, error: e });
    }
}));


// TODO: add route to register user

router.post('/register', (async (req, res, next) => {

}));


// TODO: add route to login user

router.post('/login', (async (req, res, next) => {
    
}));




module.exports = { router };
