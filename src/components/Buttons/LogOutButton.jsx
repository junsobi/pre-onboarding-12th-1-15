import React from 'react';
import Button from './Button';
import { ImExit } from 'react-icons/im';

export default function LogOutButton({ className, variant, size }) {
  const removeToken = () => localStorage.removeItem('access_token');
  const logoutHandler = () => {
    removeToken();
    window.location.href = '/';
  };

  return (
    <Button
      onClick={logoutHandler}
      text={<ImExit />}
      variant={variant}
      size={size || 'medium'}
      className={className}
    />
  );
}
