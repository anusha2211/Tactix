import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasks/taskSlice';
import TaskForm from '../components/TaskForm/TaskForm';

const Dashboard = () => {
  // Access task list from Redux global state
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Local state for editing
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newStatus, setNewStatus] = useState('todo');

  // When user clicks Edit
  const handleEdit = (task) => {
    setEditId(task.id);
    setNewTitle(task.title);
    setNewStatus(task.status);
  };

  // When user clicks Save
  const handleSave = () => {
    dispatch(editTask({ id: editId, title: newTitle, status: newStatus }));
    setEditId(null);
  };

  // When user cancels editing
  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Task creation form */}
      <TaskForm />

      {/* Render list of tasks */}
      {tasks.map((task) => (
        <div key={task.id} className="border rounded p-2 my-2">
          {editId === task.id ? (
            <>
              {/* Editable input */}
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border p-1 rounded mr-2"
              />
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="border p-1 rounded mr-2"
              >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded mr-1">
                Save
              </button>
              <button onClick={handleCancel} className="bg-gray-400 text-white px-2 py-1 rounded">
                Cancel
              </button>
            </>
          ) : (
            <>
              {task.title} - <strong>{task.status}</strong>
              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 text-white px-2 py-1 rounded ml-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
