import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputField from './components/InputField';
import Experience from './components/Experience';
import Education from './components/Education';
import ExperiencePreview from './components/ExperiencePreview';
import EducationPreview from './components/EducationPreview';
import {
  educationCV,
  educationSingle,
  experienceCV,
  experienceSingle,
  personalCV,
} from './components/CVhelpers';

function App() {
  const [personal, setPersonal] = useState(personalCV);
  const [expList, setExpList] = useState(experienceCV);
  const [eduList, setEduList] = useState(educationCV);

  const handlePersonal = (e) => {
    const name = e.target.placeholder;
    setPersonal((prev) => {
      return {
        firstName: name === 'First Name' ? e.target.value : prev.firstName,
        lastName: name === 'Last Name' ? e.target.value : prev.lastName,
        title: name === 'Title' ? e.target.value : prev.title,
        address: name === 'Address' ? e.target.value : prev.address,
        phone: name === 'Phone Number' ? e.target.value : prev.phone,
        email: name === 'Email' ? e.target.value : prev.email,
      };
    });
  };
  const handleEducation = (e, id) =>
    setEduList((prev) => {
      const name = e.target.placeholder;
      const currEdu = prev.find((item) => item.id === id);
      const currEduIndex = prev.indexOf(currEdu);
      const newEdu = {
        id: id,
        university:
          name === 'University Name' ? e.target.value : currEdu.university,
        city: name === 'City' ? e.target.value : currEdu.city,
        degree: name === 'Degree' ? e.target.value : currEdu.degree,
        from: name === 'From' ? e.target.value : currEdu.from,
        to: name === 'To' ? e.target.value : currEdu.to,
      };

      const newEduList = prev.slice();
      newEduList.splice(currEduIndex, 1, newEdu);

      return newEduList;
    });

  const handleExperience = (e, id) =>
    setExpList((prev) => {
      const name = e.target.placeholder;
      const currExp = prev.find((item) => item.id === id);
      const currExpIndex = prev.indexOf(currExp);
      const newExp = {
        id: id,
        position: name === 'Position' ? e.target.value : currExp.position,
        company: name === 'Company' ? e.target.value : currExp.company,
        city: name === 'City' ? e.target.value : currExp.city,
        from: name === 'From' ? e.target.value : currExp.from,
        to: name === 'To' ? e.target.value : currExp.to,
      };

      const newExpList = prev.slice();
      newExpList.splice(currExpIndex, 1, newExp);

      return newExpList;
    });

  const handleDelete = (list, id) => {
    if (list === 'exp')
      setExpList((prev) => prev.filter((item) => item.id !== id));
    if (list === 'edu')
      setEduList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAdd = (list) => {
    if (list === 'exp') setExpList((prev) => [...prev, experienceSingle]);
    if (list === 'edu') setEduList((prev) => [...prev, educationSingle]);
  };

  const loadExample = () => {
    setPersonal({
      firstName: 'John',
      lastName: 'Smith',
      title: 'Senior Front-End Developer',
      address: '1234 E 56 St',
      phone: '225-565-5989',
      email: 'thisIs@FakeEmail.com',
    });
    setEduList(() => [
      {
        id: uuidv4(),
        university: 'University of Miami',
        city: 'Miami',
        degree: 'Comupter Science',
        from: 2000,
        to: 2006,
      },
    ]);
    setExpList(() => [
      {
        id: uuidv4(),
        position: 'Sr. Front-End Developer',
        company: 'Mircosoft',
        city: 'Settle',
        from: 2006,
        to: 2014,
      },
    ]);
  };

  const resetCV = () => {
    setPersonal(personalCV);
    setExpList(experienceCV);
    setEduList(educationCV);
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
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Experience</h1>
            {expList.map((item) => {
              return (
                <Experience
                  key={item.id}
                  id={item.id}
                  handleExperience={handleExperience}
                  handleDelete={handleDelete}
                />
              );
            })}
            <button
              className="bg-blue-900 rounded-lg p-2 text-xl"
              onClick={() => handleAdd('exp')}
            >
              Add
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Education</h1>
            {eduList.map((item) => {
              return (
                <Education
                  key={item.id}
                  id={item.id}
                  handleEducation={handleEducation}
                  handleDelete={handleDelete}
                />
              );
            })}
            <button
              className="bg-blue-900 rounded-lg p-2 text-xl"
              onClick={() => handleAdd('edu')}
            >
              Add
            </button>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <button className="bg-green-500 rounded-lg p-2 text-xl">
              Generate PDF
            </button>
            <button
              onClick={loadExample}
              className="bg-yellow-500 rounded-lg p-2 text-xl"
            >
              Load Example
            </button>
            <button
              onClick={resetCV}
              className="bg-red-500 rounded-lg p-2 text-xl"
            >
              Reset
            </button>
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
          {expList.map((item) => {
            return <ExperiencePreview key={item.id} props={item} />;
          })}
          <h2 className="text-3xl font-bold border-b-2 pb-3 mt-5">Education</h2>
          {eduList.map((item) => {
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
