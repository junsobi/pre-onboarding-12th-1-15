import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { BiHomeAlt2 } from 'react-icons/bi';

export default function ToHomeButton({ className, variant, size }) {
  const navigate = useNavigate();

  const toHomeHandler = () => {
    navigate('/');
  };
  return (
    <Button
      onClick={toHomeHandler}
      text={<BiHomeAlt2 />}
      variant={variant || 'default'}
      size={size || 'medium'}
      className={className}
    />
  );
}
