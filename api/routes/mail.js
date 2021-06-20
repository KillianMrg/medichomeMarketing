var express = require('express');
var router = express.Router();
const mailRouter = require('../service/mail/mail');

router.post('/send', mailRouter.sendEmails);

router.post('/create', mailRouter.createMail);
router.get('/getall', mailRouter.readMails);
router.post('/getbyid', mailRouter.readMailById);
router.post('/update', mailRouter.updateMail);
router.post('/delete', mailRouter.deleteMail);

module.exports = router;