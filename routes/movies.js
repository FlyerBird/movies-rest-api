const router = require('express').Router();
const Project = require('../models/Project');

// @desc    Get all movies
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {
  // Run 'npm install' and 'npm run dev' and check on Postman if a GET request 
  // to http://localhost:8000/api/v1/movies returns the following response.
  // If it does, you are ready to work!
  try {
    const projects = await Project.find({});
    if (projects.length === 0) {
      res.status(200).json({ response: 'No projects found in the database ' });
    } else {
      res.status(200).json({ data: projects })
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Get single movie
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      res.status(404).json({ response: 'Project not found' });
    } else {
      res.status(200).json({ data: project })
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Create a movie
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ data: project })
  } catch (error) {
    next(error);
  }
});

// @desc    Edit a movie
// @route   PUT /:id
// @access  Public
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, image, year, director, synopsis } = req.body;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { title, image, year, director, synopsis }, { new: true });
    res.status(202).json({ data: updatedProject })
  } catch (error) {
    next(error);
  }
});

// @desc    Delete a movie
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await Project.findByIdAndDelete(id);
    res.status(202).json({ data: deleted });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
