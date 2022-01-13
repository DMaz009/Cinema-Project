const Movie = require('./models/movies')
const mongoose =require('mongoose')

const mongoURI = 'mongodb://127.0.0.1:27017/cinema'
const db = mongoose.connection


mongoose.connect(mongoURI, {
  useNewURLParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('DB connected!');
})

// Movie.create ([
//
//   {
//     name: "Predestination",
//     date: 09/08/21,
//     description: "Movie",
//     img: 'https://i.imgur.com/yygAJeW.jpeg',
//     video: "https://youtu.be/xxG-YfedrfU"
//   },
//   {
//     name: "Dune",
//     date: 09/08/21,
//     description: "The Spice",
//     img: 'https://i.imgur.com/b11FurS.jpeg',
//     video: "https://youtu.be/EvSEXM7a16g"
//   },
//   {
//     name: "Tenet",
//     date: 09/08/21,
//     description: "Movie within a movie",
//     img: 'https://i.imgur.com/Ub5E6aI.jpeg',
//     video: "https://www.youtube.com/watch?v=L3pk_TBkihU"
//   },
//   {
//     name: "Blade Runner",
//     date: 09/08/21,
//     description: "Psychological",
//     img: 'https://i.imgur.com/df4Okvm.jpeg',
//     video: "https://youtu.be/gCcx85zbxz4"
//   },
//   {
//     name: "Arrival",
//     date: 09/08/21,
//     description: "Alien language",
//     img: 'https://i.imgur.com/6mNU51d.jpeg',
//     video: "https://youtu.be/tFMo3UJ4B4g"
//   },
//   {
//     name: "Interstellar",
//     date: 09/18/21,
//     description: "Mind-Bender",
//     img: 'https://i.imgur.com/CAb3KWc.jpeg',
//     video: "https://youtu.be/zSWdZVtXT7E"
//   }
// ], (error, data)=> {
//   console.log(data)
//   db.close()
// })
