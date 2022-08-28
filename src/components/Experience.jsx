import React from 'react';
import InputField from './InputField';

export function Experience({ handleExperience, id }) {
  return (
    <div className="flex flex-col gap-3">
      <InputField
        onChange={(e) => handleExperience(e, id)}
        placeholder="Position"
      />
      <InputField
        onChange={(e) => handleExperience(e, id)}
        placeholder="Company"
      />
      <InputField
        onChange={(e) => handleExperience(e, id)}
        placeholder="City"
      />
      <InputField
        onChange={(e) => handleExperience(e, id)}
        placeholder="From"
      />
      <InputField onChange={(e) => handleExperience(e, id)} placeholder="To" />
      <button className="bg-blue-900 rounded-lg p-2 text-xl">Delete</button>
    </div>
  );
}

export default Experience;
