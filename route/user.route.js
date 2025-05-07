const express = require('express');
const router = express.Router();
const userController = require('./../controller/user.controller.js');
const auth = require('../middleware/auth.middleware.js');
const limiter = require("./../middleware/rateLimit.middleware.js");

router.get('/',() => limiter(10,100), userController.getAll);
router.get('/:id', userController.getById);

router.post('/', userController.create);

router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

router.put('/role/:userId/:roleId', auth("Admin"), userController.addRole);
router.delete('/role/:userId/:roleId', auth("Admin"),userController.removeRole);

module.exports = router;