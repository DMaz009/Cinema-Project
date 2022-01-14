// Dependencies............
const express = require('express')
const router = express.Router()

// Import Model...............
const Movie = require('../models/movies')

const authRequired = (req, res, next) => {
  if(req.session.currentUser) {
    //if user is signed in
    next()
    //next is part of express
  } else {
    //if there is no user logged in
    res.redirect('/users/signin')
  }
}


// Index Route....................
router.get('/', (req, res) => {
  Movie.find({}, (error, allMovies) => {
    console.log(allMovies);
    res.render('index.ejs', {
      movies: allMovies
    })
  })
})

//New Route.............................
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// Show Route.........................
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id, (error, foundMovie) => {
    console.log(foundMovie)
    res.render('show.ejs', {movie: foundMovie})
  })
})

// Post Route............................
router.post('/', (req, res) => {

  Movie.create(req.body, (error, createdMovie) => {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      console.log(createdMovie)
      res.redirect('/movies')
    }
  })
})

// Delete Route............
router.delete('/:id', authRequired, (req, res) => {
  Movie.findByIdAndDelete(req.params.id, (error, deletedMovie) => {
    if(error) {
      console.log(error)
      res.send(error)
    } else {
      console.log(deletedMovie)
      res.redirect('/movies')
    }
  })
})


//Edit Route
router.get('/:id/edit', (req, res) => {
  Movie.findById(req.params.id, (error, foundMovie) => {
    if (error) {
      console.log(error)
      res.send(error)
    } else {
      res.render('edit.ejs', {
        movie: foundMovie
      })
    }
  })
})

// Update Route
router.put('/:id', (req, res) => {

  Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (error, updatedMovie) => {
      if (error) {
        console.log(error)
        res.send(error)
      } else {
        console.log(updatedMovie)
        res.redirect('/movies')
      }
    }
  )
})










module.exports = router
//
