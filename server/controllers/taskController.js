//import the Task model to save data to MongoDB.
const Task = require('../models/TaskModel');

// POST /api/tasks → Create a new task
const createTask = async(req, res) => {
    try {
        const { title, status } = req.body; //req.body is the incoming data from the frontend (React form)

        // Ensure title is provided
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        // Create a new task document using the model
        const task = await Task.create({ title, status }); //Task.create({...}) writes to MongoDB using the schema defined in TaskModel

        // Respond with the created task
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createTask,
};