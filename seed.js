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
//     description: "Space Movie",
//     img: 'https://i.imgur.com/yygAJeW.jpeg',
//     video: "https://www.themoviedb.org/video/play?key=E0EtHm79YFE"
//   },
//   {
//     name: "Dune",
//     date: 09/08/21,
//     description: "Space Movie",
//     img: 'https://i.imgur.com/b11FurS.jpeg',
//     video: ""
//   },
//   {
//     name: "Tenet",
//     date: 09/08/21,
//     description: "Movie",
//     img: 'https://i.imgur.com/Ub5E6aI.jpeg',
//     video: ""
//   },
//   {
//     name: "Blade Runner",
//     date: 09/08/21,
//     description: "Space Movie",
//     img: 'https://i.imgur.com/df4Okvm.jpeg',
//     video: ""
//   },
//   {
//     name: "Arrival",
//     date: 09/08/21,
//     description: "Space Movie",
//     img: 'https://i.imgur.com/6mNU51d.jpeg',
//     video: ""
//   },
//   {
//     name: "Interstellar",
//     date: 09/18/21,
//     description: "Stuff",
//     img: 'https://i.imgur.com/CAb3KWc.jpeg',
//     video: ""
//   }
// ], (error, data)=> {
//   console.log(data)
//   db.close()
// })
