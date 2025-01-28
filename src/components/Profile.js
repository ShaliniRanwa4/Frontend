import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="my-28 ">
      <div className="container mx-auto     w-4/5  ">
      <h1 className="flex justify-start font-extrabold text-4xl text-red-400 py-3" > Shalini Ranwa </h1>
      <div className=" my-3 flex justify-between">
        <div className=""> 
        <h3 className="font-medium text-lg"> Email Id : ranwashalini@gmail.com</h3>
        <h3 className="font-medium text-lg">Highlight your skills and experience</h3>
        <h3 className="font-medium text-lg"> Add Location</h3>
        </div>
        <div className="py-6 font-extrabold text-xl m-1">
          <Link to={"/edit/contactdetails"}> ╰┈➤</Link>
        </div>
      </div>

      <div className="border border-blue-300 my-3 flex justify-between">
        <h1 className="p-6 m-8 font-bold text-2xl"> Resume</h1>
        <h2 className="p-6 m-8 font-bold text-2xl">⋮</h2>
      </div>


      <h1 className="font-extrabold text-2xl pt-3"> Improve your job matches</h1>
      <div className="border-y border-blue-300 my-3 flex justify-between">
        <div className="p-3 m-3"> 
        <h3 className="font-bold text-lg">Qualifications </h3>
        <h5>Highlight your skills and experience</h5>
        </div>
        <div className="py-6 font-extrabold text-xl m-1">
          <Link to={"/edit/qualification"}> ╰┈➤</Link>
        </div>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between">
        <div className="p-3 m-3"> 
        <h3 className="font-bold text-lg">Job preferences </h3>
        <h5> Save specific details like minimum desired pay and schedule   </h5>
        </div>
        <div className="py-6 font-extrabold text-xl m-1">
          <Link to={'/edit/preferences'}> ╰┈➤</Link>
        </div>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between">
        <div className="p-3 m-3"> 
        <h3 className="font-bold text-lg">Hide jobs with these details </h3>
        <h5>Manage the qualificqtions & preferences used to job from your search </h5>
        </div>
        <div className="py-6 font-extrabold text-xl m-1">
          <h2> ╰┈➤</h2>
        </div>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between">
        <div className="p-3 m-3"> 
        <h3 className="font-bold text-lg">Ready to work </h3>
        <h5>Let employers know that you can begin working straight away.</h5>
        </div>
        <div className="py-6 font-extrabold text-xl m-1">
          <Link to={"/edit/readytowork"}> ╰┈➤</Link>
        </div>
      </div>
     
      

        </div>
    </div>
  );
};

export default Profile;
