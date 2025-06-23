import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasks/taskSlice';
import TaskForm from '../components/TaskForm/TaskForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('all');
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editStatus, setEditStatus] = useState('todo');

  const filteredTasks =
    filter === 'all'
      ? allTasks
      : allTasks.filter((task) => task.status === filter);

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const startEdit = (index, task) => {
    setEditIndex(index);
    setEditTitle(task.title);
    setEditStatus(task.status);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTitle.trim()) {
      dispatch(editTask({ index: editIndex, title: editTitle, status: editStatus }));
      setEditIndex(null);
      setEditTitle('');
      setEditStatus('todo');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Add New Task */}
      <TaskForm />

      {/* Filter Buttons */}
      <div className="my-4">
        {['all', 'todo', 'inprogress', 'done'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 mx-1 rounded ${
              status === 'todo' ? 'bg-blue-300' :
              status === 'inprogress' ? 'bg-yellow-300' :
              status === 'done' ? 'bg-green-300' : 'bg-gray-300'
            }`}
          >
            {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Filtered Tasks */}
      {filteredTasks.map((task, index) => (
        <div key={index} className="border rounded p-2 my-2">
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit} className="space-y-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border p-1 rounded w-full"
              />
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
                className="border p-1 rounded w-full"
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <div className="flex gap-2">
                <button type="submit" className="bg-indigo-600 text-white px-2 py-1 rounded">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditIndex(null)}
                  className="bg-gray-400 text-white px-2 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-between items-center">
              <div>
                {task.title} - <strong>{task.status}</strong>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => startEdit(index, task)}
                  className="bg-yellow-400 px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
