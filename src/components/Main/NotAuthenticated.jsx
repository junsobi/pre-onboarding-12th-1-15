import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function NotAuthenticated() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <Button onClick={() => navigate('/signin')} variant="mainstyle" size="small" text="로그인" />
      <Button
        onClick={() => navigate('/signup')}
        variant="mainstyle"
        size="small"
        text="회원가입"
      />
    </div>
  );
}

export default NotAuthenticated;
