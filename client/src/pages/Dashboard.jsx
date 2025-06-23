import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm/TaskForm';

const Dashboard = () => {
  const allTasks = useSelector((state) => state.tasks.tasks); // ← access the nested array
  const [filter, setFilter] = useState('all');

  // Filter logic
  const filteredTasks = filter === 'all'
    ? allTasks
    : allTasks.filter((task) => task.status === filter);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Add New Task */}
      <TaskForm />

      {/* Filter Buttons */}
      <div className="my-4">
        <button onClick={() => setFilter('all')} className="px-3 py-1 mx-1 bg-gray-300 rounded">
          All
        </button>
        <button onClick={() => setFilter('todo')} className="px-3 py-1 mx-1 bg-blue-300 rounded">
          To Do
        </button>
        <button onClick={() => setFilter('inprogress')} className="px-3 py-1 mx-1 bg-yellow-300 rounded">
          In Progress
        </button>
        <button onClick={() => setFilter('done')} className="px-3 py-1 mx-1 bg-green-300 rounded">
          Done
        </button>
      </div>

      {/* Display Filtered Tasks */}
      {filteredTasks.map((task, index) => (
        <div key={index} className="border rounded p-2 my-2">
          {task.title} - <strong>{task.status}</strong>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
