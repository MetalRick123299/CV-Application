import React from 'react';

export function ExperiencePreview({ props }) {
  const { position, company, city, from, to } = props;
  return (
    <div className="flex flex-col my-3">
      <div className="grid grid-cols-2 grid-rows-2">
        <span className="text-2xl font-semibold ">{`${from} - ${to}`}</span>
        <span className="text-2xl font-semibold ">{position}</span>
        <span className="text-xl col-start-2">{`${company}, ${city}`}</span>
      </div>
    </div>
  );
}

export default ExperiencePreview;
