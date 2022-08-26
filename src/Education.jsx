import React from 'react';
import InputField from './components/InputField';

export function Education() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl">Education</h1>
      <InputField placeholder="University name" />
      <InputField placeholder="City" />
      <InputField placeholder="Degree" />
      <InputField placeholder="From" />
      <InputField placeholder="To" />
      <button className="bg-blue-900 rounded-lg p-2 text-xl">Delete</button>
      <button className="bg-blue-900 rounded-lg p-2 text-xl">Add</button>
    </div>
  );
}

export default Education;
