import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Button from '../Button';

export default function TodoLayout({ children }) {
  const navigate = useNavigate();
  const removeToken = () => localStorage.removeItem('access_token');
  const logoutHandler = () => {
    removeToken();
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-9/12 h-4/6 max-w-xl mx-auto p-3 shadow-custom-shadow text-blue-600 border-5 border-white rounded bg-white flex flex-col items-center">
          <div className="w-full h-4 flex justify-between items-center px-2 py-5 border-b-2 border-white bg-blue-300 text-white rounded-t">
            <h1 className="text-lg">my Todos</h1>
            <Button
              onClick={logoutHandler}
              text="Log Out"
              variant="returnButton"
              size="small"
              className="w-20"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
