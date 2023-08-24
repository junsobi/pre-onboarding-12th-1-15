import React from 'react';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="h-full w-full flex items-center justify-center bg-blue-500">
        <div className="w-5/6 bg-white shadow-custom-shadow rounded-lg flex flex-col items-center p-4 space-y-4 border-t-5 border-l-5 border-r-5 border-b-5 border-white">
          <div className="w-full bg-blue-300 text-white p-4 rounded-t-lg flex justify-between">
            TODO APP
          </div>
          <div className="w-full flex flex-col space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
