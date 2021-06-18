var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var postController = require('../service/instagram/post');
var saveController = require('../service/instagram/save');

router.get('/getallposts', postController.getAllPosts);
router.get('/getpostbyid', postController.getPostById);
router.get('/getposts', postController.getPosts);
router.get('/getstats', postController.getStats);

router.post('/createsaved', saveController.createPost);
router.get('/getsaved', saveController.readPostsSaved);
router.get('/getsavedbyid', saveController.readPostSavedById);
router.post('/deletesaved', saveController.deletePost);

module.exports = router;