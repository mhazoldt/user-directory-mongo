let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mustacheExpress = require('mustache-express')
let path = require('path')
let expressValidator = require('express-validator')
let expressSession = require('express-session')

app.use(expressSession({secret: 'keyboard cat', saveUninitialized: true, resave: false}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let mRoutes = require('./routes/mainRoutes')
app.use('/', mRoutes)
app.use('/user/:username', mRoutes)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'))



app.listen(3000, function(){
  console.log("App running on port 3000")
})