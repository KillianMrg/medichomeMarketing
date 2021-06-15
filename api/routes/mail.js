var express = require('express');
var router = express.Router();
const mailRouter = require('../service/mail/mail');

router.post('/send', mailRouter.sendMail());

module.exports = router;