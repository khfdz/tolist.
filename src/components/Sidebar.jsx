import React from 'react';

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-14 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="text-gray-300 p-4 self-end focus:outline-none"
      >
        Close Sidebar
      </button>
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        My Sidebar
      </div>
      <nav className="flex-grow mt-4">
        <ul>
          <li className="hover:bg-gray-700 p-4 cursor-pointer">
            <a href="#">Dashboard</a>
          </li>
          <li className="hover:bg-gray-700 p-4 cursor-pointer">
            <a href="#">Profile</a>
          </li>
          <li className="hover:bg-gray-700 p-4 cursor-pointer">
            <a href="#">Settings</a>
          </li>
          <li className="hover:bg-gray-700 p-4 cursor-pointer">
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
