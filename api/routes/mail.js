var express = require('express');
var router = express.Router();
const mailRouter = require('../service/mail/mail');

router.post('/send', mailRouter.sendEmails);

module.exports = router;