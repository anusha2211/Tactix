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
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">Add New Task</h2>

      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
