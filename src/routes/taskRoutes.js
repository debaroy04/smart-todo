const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { validateTask, validate } = require('../utils/validation');

// All routes require authentication
router.use(protect);

// Task routes
router.route('/')
  .post(validateTask, validate, taskController.createTask)
  .get(taskController.getTasks);

router.route('/stats')
  .get(taskController.getTaskStats);

router.route('/:id')
  .get(taskController.getTask)
  .put(validateTask, validate, taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;