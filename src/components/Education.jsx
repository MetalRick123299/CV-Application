import React, { useState } from 'react';
import InputField from './InputField';

export function Education({ handleEducation, handleDelete, id }) {
  return (
    <div className="flex flex-col gap-3">
      <InputField
        onChange={(e) => handleEducation(e, id)}
        placeholder="University Name"
      />
      <InputField onChange={(e) => handleEducation(e, id)} placeholder="City" />
      <InputField
        onChange={(e) => handleEducation(e, id)}
        placeholder="Degree"
      />
      <InputField onChange={(e) => handleEducation(e, id)} placeholder="From" />
      <InputField onChange={(e) => handleEducation(e, id)} placeholder="To" />
      <button
        className="bg-blue-900 rounded-lg p-2 text-xl"
        onClick={() => handleDelete('edu', id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Education;
