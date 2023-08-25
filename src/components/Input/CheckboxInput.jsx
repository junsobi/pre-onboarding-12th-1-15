import React from 'react';

function CheckboxInput({ onChange, checked, readOnly = false }) {
  return (
    <input
      className="appearance-none relative text-center border h-5 w-5 min-w-max border-solid border-blue-600 outline-none rounded-full checked:bg-blue-600 before:text-white checked:before:content-['✓'] checked:before:absolute checked:before:-top-0.5 checked:before:start-0.5"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      readOnly={readOnly}
    ></input>
  );
}

export default CheckboxInput;
