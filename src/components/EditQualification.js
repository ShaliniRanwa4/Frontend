import React from "react";
import { Link } from "react-router-dom";

const EditQualification = () => {
  return (
    <div className="my-28">
       
      <div className="w-1/3 container mx-auto    ">
      <Link  className="text-3xl my-2 text-white" to={'/profile'}>🔙</Link>
        <h1 className="flex justify-start font-bold text-4xl text-white py-3 my-1">
          
          Qualifications
        </h1>
        <span>
          We use these details to show you jobs that match your unique skills
          and experience.
        </span>
        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600 cursor-pointer">
            Add most recent work experience{" "}
          </h3>
          <h3 className="text-xl  cursor-pointer">✙</h3>
         
        </div>
        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
          Add education
          </h3>
          <h3 className="text-xl  cursor-pointer"> ✙</h3>
        </div>
        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600  cursor-pointer ">
          Add skill
          </h3>
          <h3 className="text-xl  cursor-pointer"> ✙</h3>
        </div>
        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
          Add licence
          </h3>
          <h3 className="text-xl v"> ✙</h3>
        </div>

        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
          Add certification
          </h3>
          <h3 className="text-xl  cursor-pointer"> ✙</h3>
        </div>
        <div className="border-y border-blue-300 my-3 flex justify-between py-7">
          <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
          Add language
          </h3>
          <h3 className="text-xl  cursor-pointer" > ✙</h3>
        </div>

      </div>
    </div>
  );
};

export default EditQualification;
