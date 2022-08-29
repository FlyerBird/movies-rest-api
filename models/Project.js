const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  
    director: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    image: {
      type: String,
     
    },
    year: {
      type: Number,
      
    },
  },
  {
    timestamps: true
  }
);

const Project = model('Project', projectSchema);

module.exports = Project;