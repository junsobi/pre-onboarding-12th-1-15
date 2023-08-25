import React from 'react';
import LogOutButton from '../Buttons/LogOutButton';
import ToHomeButton from '../Buttons/ToHomeButton';

export default function TodoLayout({ children }) {
  return (
    <div className="flex flex-col overflow-hidden h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-9/12 h-4/6 max-w-xl m-auto p-3 shadow-custom-shadow text-blue-600 border-5 border-white rounded bg-white flex flex-col items-center">
          <div className="w-full h-4 flex justify-between items-center px-2 py-5 border-b-2 border-white bg-headerColor text-white rounded-t">
            <h1 className="text-lg font-bold">My Todos</h1>
            <div className="flex gap-2">
              <ToHomeButton variant="returnButton" size="small" className="w-10" />

              <LogOutButton variant="returnButton" size="small" className="w-10" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
