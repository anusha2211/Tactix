import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Board', path: '/board' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Tactix 🚀</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-semibold' : 'text-white'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
