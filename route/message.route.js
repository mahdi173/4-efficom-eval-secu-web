const express = require('express');
const router = express.Router();
const messageController = require('../controller/message.controller.js');
const auth = require('../middleware/auth.middleware.js');
const limiter = require("./../middleware/rateLimit.middleware.js");

router.get('/',() => limiter(10,100), messageController.getAll);
router.get('/:id', messageController.getById);

router.post('/',auth, messageController.create);

router.put('/:id',auth, messageController.update);
router.delete('/:id',auth, messageController.remove);



module.exports = router;