import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasks/taskSlice';
import TaskForm from '../components/TaskForm/TaskForm';

const Dashboard = () => {
  const allTasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();

  const filteredTasks =
    filter === 'all' ? allTasks : allTasks.filter((task) => task.status === filter);

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    const newTitle = prompt('Edit task title:', filteredTasks[index].title);
    if (newTitle !== null) {
      dispatch(editTask({ index, newTitle }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">Dashboard</h1>

      {/* Add New Task */}
      <TaskForm />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 my-6">
        {['all', 'todo', 'inprogress', 'done'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded font-semibold text-sm shadow ${
              filter === status
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Filtered Tasks */}
      <div className="grid gap-4">
        {filteredTasks.map((task, index) => (
          <div key={index} className="flex justify-between items-center border p-4 rounded-lg shadow-sm bg-white">
            <div>
              <p className="text-lg font-medium">{task.title}</p>
              <span className="text-sm text-gray-500">Status: {task.status}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
