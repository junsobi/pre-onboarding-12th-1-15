import React from 'react';
import { useNavigate } from 'react-router';
import Button from './Button';
import { RiArrowGoBackLine } from 'react-icons/ri';

export default function ReturnButton({ className, variant, size }) {
  const navigate = useNavigate();
  const returnHandler = () => {
    navigate('/');
  };
  return (
    <Button
      onClick={returnHandler}
      text={<RiArrowGoBackLine />}
      variant={variant}
      size={size || 'medium'}
      className={className}
    />
  );
}
