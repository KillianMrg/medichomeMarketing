const express = require('express');
const router = express.Router();

const service = require('../services/instagram');

//router.get('/:id', service.getById);

router.get('/all', service.getAll)

//router.put('/save', service.save);

//router.patch('/update', service.update);

//router.delete('/delete', service.delete);

module.exports = router;