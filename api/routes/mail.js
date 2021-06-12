var express = require('express');
var router = express.Router();
var mailController = require('../service/mail/mail')

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Bienvenue sur le module marketing medichome !'
    });
});

router.get('/api', async (req, res) => {
  res.status(200).json({
      name   : 'API', 
      version: '1.0', 
      status : 200, 
      message: 'Bienvenue sur l\'API du module marketing  !'
  });
});

router.use('/instagram', instagramRouter);
router.use('/mail', mailRouter);

module.exports = router;