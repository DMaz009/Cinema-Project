// Dependencies............
const express = require('express')
const router = express.Router()
const alert = require('alert')

// Import Model...............
const Movie = require('../models/movies')



// Index Route....................
router.get('/', (req, res) => {
  res.render('index.ejs')
})









module.exports = router
