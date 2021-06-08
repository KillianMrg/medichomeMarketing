var express = require('express');
var router = express.Router();

const authRoute = require('./auth');
const instagramRoute = require('./instagram');

router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Bienvenue sur medichome !'
    });
});
router.get('/api', async (req, res) => {
  res.status(200).json({
      name   : 'API', 
      version: '1.0', 
      status : 200, 
      message: 'Bienvenue sur l\'API !'
  });
});

router.use('/api/auth', authRoute);
router.use('/api/instagram', instagramRoute);

module.exports = router;