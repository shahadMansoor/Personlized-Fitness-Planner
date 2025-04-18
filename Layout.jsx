import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex bg-[#f8f9f8] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="bg-[#e9e9e9] text-center py-3 rounded-t-xl text-lg font-bold text-gray-800">
          {pageTitle}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;