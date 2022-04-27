const express = require('express');
const controller = require('./controller')
const router = express.Router();


/**
 * /api/tweets GET -> LIST
 * /api/tweets POST -> CREATE
 * /api/tweets/:id GET -> READ
 * /api/tweets/id PUT -> LIST
 * /api/tweets/is DELETE -> DELETE
 */

router.route('/')
    .get(controller.list)
    .post(controller.create);

// router.param('id', controller.id)


router.route('/:id')
    .get(controller.id, controller.read)
    .put(controller.id, controller.update)
    .delete(controller.delete);


//GET http://localhost:3000/api/v1/tweets/
//GET http://localhost:3000/api/v1/mensajes/

module.exports = router;