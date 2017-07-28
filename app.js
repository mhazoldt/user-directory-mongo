let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mustacheExpress = require('mustache-express')
let path = require('path')
let expressValidator = require('express-validator')
let expressSession = require('express-session')

let mRoutes = require('./routes/mainRoutes')
app.use('/', mRoutes)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var sess = {
  secret: 'keyboard cat',
  cookie: {}
}

app.listen(3000, function(){
  console.log("App running on port 3000")
})