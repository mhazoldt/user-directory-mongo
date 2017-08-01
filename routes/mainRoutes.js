var express = require('express')
var router = express.Router()

let indexController = require('../controllers/indexController')
let profileController = require('../controllers/profileController')


// define the home page route
router.get('/', indexController.index)
router.get('/user/:username', profileController.profileData)

module.exports = router