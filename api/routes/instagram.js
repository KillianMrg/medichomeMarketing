var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var postController = require('../service/instagram/post');
var saveController = require('../service/instagram/save');

router.get('/getallposts', postController.getAllPosts); // Récupérer tous les posts (Instagram et sauvegardé)
router.get('/getpostbyid', postController.getPostById); // Récupérer un post insta avec son ID
router.get('/getposts', postController.getPosts); // Récupérer tous les post insta
router.get('/getstats', postController.getStats); // Récupérer les stats de l'utilisateur

router.post('/createsaved', saveController.createPost); // Créer un post sauvegarder
router.get('/getsaved', saveController.readPostsSaved); // Récupérer tous les posts sauvegardés
router.get('/getsavedbyid', saveController.readPostSavedById); // Récupérer un post sauvegardé avec son ID
router.post('/deletesaved', saveController.deletePost); // Supprimer un post sauvegardé par son id

module.exports = router;