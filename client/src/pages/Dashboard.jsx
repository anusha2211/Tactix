import React from 'react';
// import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';


const Dashboard = () => {
  // Select tasks from Redux state
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {/* Add Task Form */}
      <TaskForm />

      {/* List all tasks */}
      {tasks.map((task, index) => (
        <div key={index} className="border rounded p-2 my-2 flex justify-between items-center">
          <span>{task.title} - <strong>{task.status}</strong></span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
