import React from 'react';
import InputField from './components/InputField';

export function Experience() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl">Experience</h1>
      <InputField placeholder="Position" />
      <InputField placeholder="Company" />
      <InputField placeholder="City" />
      <InputField placeholder="From" />
      <InputField placeholder="To" />
      <button className="bg-blue-900 rounded-lg p-2 text-xl">Delete</button>
      <button className="bg-blue-900 rounded-lg p-2 text-xl">Add</button>
    </div>
  );
}

export default Experience;
