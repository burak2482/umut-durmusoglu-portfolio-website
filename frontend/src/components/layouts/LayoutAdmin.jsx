import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../adminpagecomponents/Sidebar';
import Navbar from '../adminpagecomponents/Navbar';

const LayoutAdmin = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 bg-white p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;

