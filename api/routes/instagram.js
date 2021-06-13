var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var postController = require('../service/instagram/post');
var saveController = require('../service/instagram/save');


router.get('/auth', authRouter);


module.exports = router;