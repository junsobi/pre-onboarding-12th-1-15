import React from 'react';
import ReturnButton from '../Buttons/ReturnButton';
import LogOutButton from '../Buttons/LogOutButton';

export default function Layout({ title, children, showButton = 'return' }) {
  const renderButton = () => {
    const tokenExists = !!localStorage.getItem('access_token');

    switch (showButton) {
      case 'return':
        return <ReturnButton variant="returnButton" />;
      case 'logout':
        return tokenExists ? (
          <LogOutButton variant="returnButton" />
        ) : (
          <div className="p-2 h-6"></div>
        );
      case 'nothing':
      default:
        return <div className="p-2 h-6"></div>;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8/12  max-w-lg mx-auto  p-3 shadow-custom-shadow text-blue-600 border-5 border-white rounded bg-white flex flex-col items-center justify-start">
          <div className="w-full h-4 flex justify-between items-center p-5 border-b-2 border-white bg-blue-300 text-white rounded-t">
            <h1 className="font-bold text-lg">{title}</h1>
            {renderButton()}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
