import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotAuthenticated() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => navigate('/signin')}
        className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded hover:bg-yellow-200"
      >
        로그인
      </button>
      <button
        onClick={() => navigate('/signup')}
        className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded hover:bg-yellow-200"
      >
        회원가입
      </button>
    </div>
  );
}

export default NotAuthenticated;
