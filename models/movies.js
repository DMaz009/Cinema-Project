const mongoose = require('mongoose')

// Object Destructing...................
const { Schema, model} = mongoose

const movieSchema = new Schema({
  name: { type: String, require: true},
  date: { type: Date, require: true},
  description: String,
  img: String,
  video: String,
  movieOrSeries: { type: Boolean, required: false},
  rating: { type: Number, min: 0, max: 5},
  favs: { type: Number, min: 0},
  dislikes: { type: Number, min: 0},
  tags: [String],
}, {timestamps: true})


const Movie = mongoose.model('Movie', movieSchema)





module.exports = Movie
