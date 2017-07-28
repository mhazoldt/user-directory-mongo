var express = require('express')
var router = express.Router()

let indexController = require('../controllers/indexController')


// define the home page route
router.get('/', indexController.index)


module.exports = router