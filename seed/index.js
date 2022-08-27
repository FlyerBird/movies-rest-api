require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

// Add the model and array you want to seed
const movierProjects = [
  {
    title: "Spiderman",
    description: "Spiderman description blablabla",
    director: "Tom",
    synopsis: "gooooodd movie",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG"
  },
  {
    title: "Titanic",
    description: "Titanic description blablabla",
    director: "Sam",
    synopsis: "gooooodd movie yii",
    image: "https://i.blogs.es/4a9cb1/titanic/840_560.jpeg"
  },
  {
    title: "The Simpsons",
    description: "The Simpsons description blablabla",
    director: "John",
    synopsis: "gooooodd movie yaaa",
    image: "https://pics.filmaffinity.com/Los_Simpson_Serie_de_TV-397676780-large.jpg"
  },
  {
    title: "Minions",
    description: "Minions description blablabla",
    director: "Maries",
    synopsis: "gooooodd movie yuu",
    image: "https://phantom-elmundo.unidadeditorial.es/20a481032fd45dd125f0d5e788117f3c/crop/282x17/2183x1284/resize/1200/f/jpg/assets/multimedia/imagenes/2022/06/25/16561686790726.jpg"
  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Project.create(movierProjects)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })


  