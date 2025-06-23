import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  console.log('Tasks from Redux:', tasks);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-4 list-disc pl-6">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
