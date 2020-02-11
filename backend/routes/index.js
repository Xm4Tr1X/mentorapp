const express = require('express');
const router = express.Router();
const mentorRouter = require('./mentors');
const taskRouter = require('./tasks');

router.get('/', function(req, res, next) {
  res.status(200).json('Welcome to Mentors API');
});

router.use('/mentors', mentorRouter);
router.use('/tasks', taskRouter);

module.exports = router;
