import React from 'react';

function CheckboxInput({ onChange, checked, readOnly = false }) {
  return (
    <input
      className="appearance-none relative text-center border h-5 w-5 min-w-max border-solid border-uiBorderColor outline-none rounded-full checked:bg-uiBorderColor before:text-white checked:before:content-['✓'] before:font-bold checked:before:absolute checked:before:-top-0.5 checked:before:start-0.5"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      readOnly={readOnly}
    ></input>
  );
}

export default CheckboxInput;
