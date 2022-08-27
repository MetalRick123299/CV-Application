import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import Experience from './components/Experience';
import Education from './components/Education';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';

const test = {
  position: 'Senior',
  company: 'Google',
  city: 'Miami',
  from: 2005,
  to: 2015,
};

const test2 = {
  university: 'FIU',
  city: 'Miami',
  degree: 'Comupter Science',
  from: 1998,
  to: 2004,
};

const test3 = {
  firstName: 'John',
  lastName: 'Doe',
  title: 'Front-End Developer',
  address: '123 NW 456 St',
  phone: '223-215-9568',
  email: 'veryfake@email.com',
};

function App() {
  return (
    <div className="flex flex-col mxl:justify-center items-center">
      <div className="bg-blue-500 rounded-xl shadow-lg w-[50vw] left-10 my-6 xl:absolute">
        <div className="flex flex-col gap-5 py-5 px-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Personal Details</h1>
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="Title" />
            <InputField placeholder="Address" />
            <InputField inputType="tel" placeholder="Phone Number" />
            <InputField inputType="email" placeholder="Email" />
          </div>
          <Experience />
          <Education />

          <div className="flex flex-col gap-3 mt-5">
            <button className="bg-green-500 rounded-lg p-2 text-xl">
              Generate PDF
            </button>
            <button className="bg-yellow-500 rounded-lg p-2 text-xl">
              Load Example
            </button>
            <button className="bg-red-500 rounded-lg p-2 text-xl">Reset</button>
          </div>
        </div>
      </div>

      <div className="bg-red-500 rounded-xl shadow-lg mxl:min-w-[350px] min-w-[40vw] min-h-[95vh] xl:fixed xl:right-10 xl:top-[50%] xl:translate-y-[-50%] gridCV">
        <div className="bg-green-800 col-span-full min-h-full min-w-full z-10  rounded-t-xl p-5">
          <h1 className="text-6xl font-bold">{`${test3.firstName} ${test3.lastName}`}</h1>
          <h2 className="text-3xl font-semibold">{test3.title}</h2>
        </div>

        <div className="bg-green-600 min-h-full min-w-full z-10 p-5 col-span-4 row-span-5 rounded-bl-xl">
          <h2 className="text-3xl font-bold border-b-2 pb-3 ">Experience</h2>
          <ExperiencePreview props={test} />
          <ExperiencePreview props={test} />
          <h2 className="text-3xl font-bold border-b-2 pb-3 mt-5">Education</h2>
          <EducationPreview props={test2} />
          <EducationPreview props={test2} />
        </div>

        <div className="bg-green-500 min-h-full min-w-full z-10 p-5 col-start-5 col-span-2 row-span-5 rounded-br-xl">
          <h2 className="text-3xl font-bold border-b-2 pb-3 mb-3">
            Personal Details
          </h2>
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold">Address:</span>
            <span className="text-xl pl-3">{test3.address}</span>

            <span className="text-2xl font-bold">Phone:</span>
            <span className="text-xl pl-3">{test3.phone}</span>

            <span className="text-2xl font-bold">Email:</span>
            <span className="text-xl pl-3">{test3.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
