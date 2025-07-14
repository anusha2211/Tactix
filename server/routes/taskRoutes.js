// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const { createTask } = require('../controllers/taskController');

// When POST request is made to /api/tasks → call createTask()
router.post('/tasks', createTask);

module.exports = router;