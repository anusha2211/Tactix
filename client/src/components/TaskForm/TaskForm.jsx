import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasks/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addTask({ title, status }));
    setTitle('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="border p-2 rounded w-full mb-2"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
