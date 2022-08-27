import React from 'react';

export function EducationPreview({ props }) {
  const { university, city, degree, from, to } = props;
  return (
    <div className="flex flex-col my-3">
      <div className="grid grid-cols-2 grid-rows-2">
        <span className="text-2xl font-semibold ">{`${from} - ${to}`}</span>
        <span className="text-2xl font-semibold">{`${university}, ${city}`}</span>
        <span className=" text-xl col-start-2">{degree}</span>
      </div>
    </div>
  );
}

export default EducationPreview;
