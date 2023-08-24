import React from 'react';

function Button({
  dataTestId,
  text,
  onClick,
  type,
  size = 'medium',
  className = '',
  disabled = false,
}) {
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const defaultStyles =
    'text-black bg-textBg hover:bg-buttonHover hover:text-white font-bold rounded focus:outline-none ';

  const buttonClassName = `${defaultStyles} ${sizeStyles[size]} ${className}`;

  return (
    <button
      data-testid={dataTestId}
      className={buttonClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
