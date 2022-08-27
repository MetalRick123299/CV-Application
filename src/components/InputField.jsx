import React from 'react';

export function InputField({ inputType = 'text', onChange, placeholder }) {
  return (
    <input
      type={inputType}
      className=" text-black text-xl rounded-lg p-1 pl-3 focus:outline-none focus:ring-4 focus:ring-blue-900"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default InputField;
