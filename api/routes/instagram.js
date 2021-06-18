var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var postController = require('../service/instagram/post');
var saveController = require('../service/instagram/save');

router.get('/getallposts', postController.getAllPosts); // Récupérer tous les posts (Instagram et sauvegardé)
router.post('/getpostbyid', postController.getPostById); // Récupérer un post insta avec son ID                 requied: _id
router.get('/getposts', postController.getPosts); // Récupérer tous les post insta
router.get('/getstats', postController.getStats); // Récupérer les stats de l'utilisateur

router.post('/createsaved', saveController.createPost); // Créer un post sauvegarder                            requied: 
router.get('/getsaved', saveController.readPostsSaved); // Récupérer tous les posts sauvegardés
router.post('/getsavedbyid', saveController.readPostSavedById); // Récupérer un post sauvegardé avec son ID     requied: _id
router.post('/deletesaved', saveController.deletePost); // Supprimer un post sauvegardé par son id              requied: _id

module.exports = router;