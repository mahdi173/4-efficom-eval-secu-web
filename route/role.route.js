const express = require('express');
const router = express.Router();
const roleController = require('../controller/role.controller.js');
const auth = require('../middleware/auth.middleware.js');

router.get('/',  auth("Admin"),roleController.getAll);
router.get('/:id',  auth("Admin"), roleController.getById);

router.post('/', auth("Admin"), roleController.create);

router.put('/:id', auth("Admin"), roleController.update);
router.delete('/:id', auth("Admin"), roleController.remove);



module.exports = router;