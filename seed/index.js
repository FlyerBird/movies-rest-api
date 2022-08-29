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
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG",
    year: 1999
  },
  {
    title: "Titanic",
    description: "Titanic description blablabla",
    director: "Sam",
    synopsis: "gooooodd movie yii",
    image: "https://i.blogs.es/4a9cb1/titanic/840_560.jpeg",
    year: 1989
  },
  {
    title: "The Simpsons",
    description: "The Simpsons description blablabla",
    director: "John",
    synopsis: "gooooodd movie yaaa",
    image: "https://elcomercio.pe/resizer/Kd42zQ8KBbZW4dUKd5mJK2Ob0_U=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BOAV73DWOBBX5IFWIOTU6JYJ2Y.jpg",
    year: 2002
  },
  {
    title: "Minions",
    description: "Minions description blablabla",
    director: "Maries",
    synopsis: "gooooodd movie yuu",
    image: "https://phantom-elmundo.unidadeditorial.es/20a481032fd45dd125f0d5e788117f3c/crop/282x17/2183x1284/resize/1200/f/jpg/assets/multimedia/imagenes/2022/06/25/16561686790726.jpg",
    year: 2007
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


  