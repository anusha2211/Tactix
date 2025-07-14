// models/taskModel.js

const mongoose = require('mongoose');

// Define schema structure for Task documents
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task must have a title'],
    },
    status: {
        type: String,
        enum: ['todo', 'inprogress', 'done'],
        default: 'todo',
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Exporting a mongoose model based on this schema
module.exports = mongoose.model('Task', taskSchema);