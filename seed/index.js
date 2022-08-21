require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('../models/Project');

// Add the model and array you want to seed
const movierProjects = [
  {
    title: "Spiderman",
    description: "Spiderman description blablabla"
  },
  {
    title: "Titanic",
    description: "Titanic description blablabla"
  },
  {
    title: "The Simpsons",
    description: "The Simpsons description blablabla"
  },
  {
    title: "Minions",
    description: "Minions description blablabla"
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


  