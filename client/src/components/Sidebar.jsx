import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Board", path: "/board/123" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Tactix 🚀</h2>
      <ul>
        {navItems.map(({ name, path }) => (
          <li key={path} className="mb-4">
            <Link
              to={path}
              className={`block p-2 rounded ${
                pathname === path ? "bg-indigo-600" : "hover:bg-gray-700"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
