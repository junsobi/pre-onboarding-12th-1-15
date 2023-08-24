import React from 'react';

function Input({
  dataTestId,
  value,
  onChange,
  placeholder,
  inputRef,
  size,
  className,
  type,
  id,
  variant,
}) {
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const variantStyles = {
    authStyle:
      'h-7 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent',
  };

  const defaultStyles = 'flex-auto text-lg pr-10 pl-2 border-0 outline-none rounded ';

  const inputClassName = `${defaultStyles} ${sizeStyles[size] || ''} ${
    variantStyles[variant] || ''
  } ${className}`;

  return (
    <input
      data-testid={dataTestId}
      id={id}
      type={type}
      className={inputClassName}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      size={size}
    ></input>
  );
}

export default Input;
