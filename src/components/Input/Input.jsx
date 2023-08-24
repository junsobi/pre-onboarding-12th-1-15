import React from 'react';

function Input({ dataTestId, value, onChange, placeholder, inputRef, size, className, type, id }) {
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-4 py-3 text-lg',
  };

  const defaultStyles = 'flex-auto text-lg pr-10 pl-2 border-0 outline-none rounded w-[80%] ';

  const inputClassName = `${defaultStyles} ${sizeStyles[size]} ${className}`;

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
