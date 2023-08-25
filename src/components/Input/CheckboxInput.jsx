import React from 'react';

function CheckboxInput({ onChange, checked, readOnly = false }) {
  return (
    <input
      className="mx-2 outline-none"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      readOnly={readOnly}
    ></input>
  );
}

export default CheckboxInput;
