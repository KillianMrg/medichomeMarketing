var express = require('express');
var router = express.Router();
const mailRouter = require('../service/mail/mail');

router.post('/send', mailRouter.sendEmails);

router.post('/create', mailRouter.sendEmails);
router.post('/getall', mailRouter.sendEmails);
router.post('/getbyid', mailRouter.sendEmails);
router.post('/update', mailRouter.sendEmails);
router.post('/delete', mailRouter.sendEmails);
module.exports = router;