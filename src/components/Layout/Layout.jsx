import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import { RiArrowGoBackLine } from 'react-icons/ri';

export default function Layout({ title, children, showReturnButton = true }) {
  const navigate = useNavigate();
  const returnHandler = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-8/12  max-w-lg mx-auto  p-3 shadow-custom-shadow text-blue-600 border-5 border-white rounded bg-white flex flex-col items-center justify-start">
          <div className="w-full h-4 flex justify-between items-center p-5 border-b-2 border-white bg-blue-300 text-white rounded-t">
            <h1 className="font-bold text-lg">{title}</h1>
            {showReturnButton ? (
              <Button onClick={returnHandler} text={<RiArrowGoBackLine />} variant="returnButton" />
            ) : (
              <div className="p-2 h-6"></div>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
