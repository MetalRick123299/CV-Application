import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import Experience from './components/Experience';
import Education from './components/Education';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';
import { personalCV, experienceCV, educationCV } from './components/CVhelpers';

function App() {
  const [personal, setPersonal] = useState(personalCV);
  const [experience, setExperience] = useState(experienceCV);
  const [education, setEducation] = useState(educationCV);

  const handlePersonal = (e) => {
    const name = e.target.placeholder;
    setPersonal((prev) => {
      return {
        firstName: name === 'First Name' ? e.target.value : prev.firstName,
        lastName: name === 'Last Name' ? e.target.value : prev.lastName,
        title: name === 'Title' ? e.target.value : prev.title,
        address: name === 'Address' ? e.target.value : prev.adress,
        phone: name === 'Phone Number' ? e.target.value : prev.phone,
        email: name === 'Email' ? e.target.value : prev.email,
      };
    });
  };

  return (
    <div className="flex flex-col mxl:justify-center items-center">
      <div className="bg-blue-500 rounded-xl shadow-lg w-[50vw] left-10 my-6 xl:absolute">
        <div className="flex flex-col gap-5 py-5 px-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Personal Details</h1>
            <input
              type="text"
              className=" text-black text-xl rounded-lg p-1 pl-3 focus:outline-none focus:ring-4 focus:ring-blue-900"
              placeholder="First Name"
              value={personal.firstName}
              onChange={handlePersonal}
            />
            <InputField onChange={handlePersonal} placeholder="Last Name" />
            <InputField onChange={handlePersonal} placeholder="Title" />
            <InputField onChange={handlePersonal} placeholder="Address" />
            <InputField
              onChange={handlePersonal}
              inputType="tel"
              placeholder="Phone Number"
            />
            <InputField
              onChange={handlePersonal}
              inputType="email"
              placeholder="Email"
            />
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

      <div className=" rounded-xl shadow-lg max-w-[40vw] mxl:min-w-[350px] min-w-[40vw] min-h-[95vh] xl:fixed xl:right-10 xl:top-[50%] xl:translate-y-[-50%] gridCV">
        <div className="bg-green-800 col-span-full min-h-full min-w-full z-10  rounded-t-xl p-5">
          <h1 className="text-6xl font-bold">{`${personal.firstName} ${personal.lastName}`}</h1>
          <h2 className="text-3xl font-semibold">{personal.title}</h2>
        </div>

        <div className="bg-green-600 min-h-full min-w-full z-10 p-5 col-span-4 row-span-5 rounded-bl-xl">
          <h2 className="text-3xl font-bold border-b-2 pb-3 ">Experience</h2>
          {experience.map((item) => {
            return <ExperiencePreview key={item.id} props={item} />;
          })}
          <h2 className="text-3xl font-bold border-b-2 pb-3 mt-5">Education</h2>
          {education.map((item) => {
            return <EducationPreview key={item.id} props={item} />;
          })}
        </div>

        <div className="bg-green-500 min-h-full min-w-full z-10 p-5 col-start-5 col-span-2 row-span-5 rounded-br-xl">
          <h2 className="text-3xl font-bold border-b-2 pb-3 mb-3">
            Personal Details
          </h2>
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold">Address:</span>
            <span className="text-xl pl-3">{personal.address}</span>

            <span className="text-2xl font-bold">Phone:</span>
            <span className="text-xl pl-3">{personal.phone}</span>

            <span className="text-2xl font-bold">Email:</span>
            <span className="text-xl pl-3">{personal.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
