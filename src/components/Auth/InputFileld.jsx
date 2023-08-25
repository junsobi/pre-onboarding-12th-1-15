import React from 'react';

function InputField({ label, id, inputRef, onChangeHandler, type, errorMsg }) {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={id} className="text-blue-800 mb-1">
        {label}
      </label>
      <input
        data-testid={`${id}-input`}
        id={id}
        ref={inputRef}
        onChange={onChangeHandler}
        type={type}
        className="h-9 p-2 text-blue-600 border border-blue-600 rounded focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <div className="h-2">
        <span id={`${id}-error-msg`} className="text-xs">
          {errorMsg}
        </span>
      </div>
    </div>
  );
}

export default InputField;
