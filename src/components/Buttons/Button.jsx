import React from 'react';

function Button({
  dataTestId,
  text,
  onClick,
  type,
  size = 'medium',
  className = '',
  disabled = false,
  variant = 'default',
}) {
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const variantStyles = {
    default: 'text-black bg-textBg hover:bg-buttonHover hover:text-white',
    mainstyle: 'w-full border border-blue-700 text-blue-700 hover:bg-yellow-200',
    returnButton:
      'flex items-center justify-center border border-blue-600 p-2 h-6 bg-white text-blue-600 rounded hover:bg-yellow-300',
  };

  const defaultStyles = 'font-bold rounded focus:outline-none ';

  const buttonClassName = `${defaultStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

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
