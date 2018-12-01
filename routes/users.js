var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

router.create('/', userController.create);

router.get('/', userController.getAll);

router.get('/:id', userController.get);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;
