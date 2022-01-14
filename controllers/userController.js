// Dependencies............
const express = require('express')
const bcrypt = require('bcrypt')


// Import Model...............
const User = require('../models/movies')

const router = express.Router()

//Register Route
router.get('/register', (req, res) =>{
  res.render('users/register.ejs')
})

router.post('/register', (req, res) => {
  const salt = bcrypt.genSaltSync(10)

  req.body.password = bcrypt.hashSync(req.body.password, salt)
  console.log(req.body)

  //checking to see if user name is unique
  User.findOne({username: req.body.username}, (error, userExists) => {
    if (userExists) {
      res.send('that username is taken')
    } else {
      User.create(req.body, (error, createdUser) => {
        req.session.currentUser = createdUser
        res.redirect('/movies')
      })
    }
  })
})

router.get('/signin', (req, res) => {
  res.render('users/signin.ejs')
})

router.post('/signin', (req, res) => {
  //need to find the user with that Username
  User.findOne({ username: req.body.username },
  (error, foundUser) => {
    if (foundUser) {
      //if user exists, compare passwords.
      const validLogin = bcrypt.compareSync(req.body.password,
      foundUser.password)
      if (validLogin) {
        req.session.currentUser = foundUser
        res.redirect('/movies')
      } else {
        res.send('Invalid username or password')
      }
    } else {
      res.send("Invalid username or password")
    }
  })
})


router.get('/signout', (req, res) => {
  //terminate session with destroy
  req.session.destroy()
  res.redirect('/movies')
})





module.exports = router
