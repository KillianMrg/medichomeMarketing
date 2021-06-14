var express = require('express');
var router = express.Router();

const authController = require('../service/instagram/auth')

router.get('/', authController.getAccessToken());

module.exports = router;