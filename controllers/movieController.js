// Dependencies............
const express = require('express')
const router = express.Router()

// Import Model...............
const Movie = require('../models/movies')



// Index Route....................
router.get('/', (req, res) => {
  Movie.find({}, (error, allMovies) => {
    res.render('index.ejs', {
      movies: allMovies
    })
  })
})









module.exports = router
//
