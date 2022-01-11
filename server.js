//Dependencies.....................
const express = require('express')
const app = express()
const methodOverride = require('method-override')
// const session = require('express-session')
require('dotenv').config()

const PORT = process.env.PORT

const Movie = require('./models/movies')

// DB Setup.........................
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI

// Session Setup
// const SESSION_SECRET = process.env.SESSION_SECRET
// console.log("Session Secret HERE!")
// console.log(SESSION_SECRET)
// //Middleway for session
// app.use(session({
//   secret: SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// //Custom Middleware to make current User available as a
// // local variable
// app.use((req, res, next) => {
//   res.locals.currentUser = req.session.currentUser
// })

// Connection Name.....................
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewURLParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("DB Connected");
})

// Help with DB debugging ..........
db.on('error', (error) => { console.log('ERROR: ', error)})
db.on('connected', () => { console.log("Mongo Connected")})
db.on('disconnected', () => { console.log('Mongo Disconnected')})


// Middleware for parser and delete dependencies........
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.json())

//Controllers.......................
const movieController = require('./controllers/movieController')

app.use('/movies', movieController)

// const userController = require('./controllers/userController')
// app.use('/users', userController)

app.get('/', (req, res) => {
  res.send('Hello')
})









app.listen(PORT, () => {
  console.log('Cinema App Server is Running on Port: ', PORT)
})

//
