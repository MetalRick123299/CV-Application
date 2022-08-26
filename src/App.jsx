import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import Experience from './Experience';
import Education from './Education';

function App() {
  return (
    <div className="flex flex-col mxl:justify-center items-center">
      <div className="bg-blue-500 rounded-xl shadow-lg min-w-[50vw] left-10 my-6 xl:absolute">
        <div className="flex flex-col gap-5 py-5 px-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl">Personal Details</h1>
            <InputField placeholder="First Name" />
            <InputField placeholder="Last Name" />
            <InputField placeholder="Title" />
            <InputField placeholder="Address" />
            <InputField inputType="tel" placeholder="Phone Number" />
            <InputField inputType="email" placeholder="Email" />
            <InputField placeholder="Description" />
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

      <div className="bg-red-500 rounded-xl shadow-lg mxl:min-w-[350px] min-w-[40vw] min-h-[95vh] xl:fixed xl:right-10 xl:top-[50%] xl:translate-y-[-50%]">
        <div className="py-5 px-10">CV-Previewer</div>
      </div>
    </div>
  );
}

export default App;
