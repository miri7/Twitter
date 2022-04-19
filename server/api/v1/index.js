const express = require('express')


const router = express.Router();
const tweets = require('./tweets/routes')

router.use('/tweets',tweets)
//router.use('/mensajes',tweets)

module.exports = router;
