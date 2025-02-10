import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="top-24 bottom-20 ">
      <div className="container mx-auto  pt-24 pb-20   w-4/5  ">
        <Link className="text-3xl my-2 text-white" to={"/admin/homepage"}>
          🔙
        </Link>
        <div className="flex justify-between align-middle">
          <h1 className=" font-extrabold text-4xl text-blue-500 pt-7 ">
            {" "}
            Shalini Ranwa{" "}
          </h1>
          <div className="avatar">
            <div className="bg-blue-500 rounded-full m-1">
              <h1 className="font-extrabold text-5xl p-4 ">SR</h1>
            </div>
          </div>
        </div>

        <div className=" my-3 flex justify-between text-black">
          <div className="">
            <h3 className="font-medium text-lg"> ✉ ranwashalini@gmail.com</h3>
            <h3 className="text-lg font-medium"> Contact no : 1234567890</h3>
            <h3 className="font-medium text-lg">🏠︎ Add Location</h3>
          </div>
          <div className="py-6 font-extrabold text-xl m-1 ">
            <Link to={"/edit/contactdetails"}> ╰┈➤</Link>
          </div>
        </div>

        <div className="border border-blue-300 my-3 flex justify-between text-black cursor-pointer">
          <h1 className="p-6 m-8 font-bold text-2xl"> Resume</h1>
          <h2 className="p-6 m-8 font-bold text-2xl">⋮</h2>
        </div>

        <h1 className="font-extrabold text-2xl text-black pt-3">
          {" "}
          Improve your job matches
        </h1>
        <Link to={"/edit/qualification"}>
          {" "}
          <div className="border-y border-blue-300 my-3 flex justify-between text-black cursor-pointer">
            <div className="p-3 m-3 text-black  ">
              <h3 className="font-bold text-lg">Qualifications </h3>
              <h5>Highlight your skills and experience</h5>
            </div>
            <div className="py-6 font-extrabold text-xl m-1">
              <Link to={"/edit/qualification"}> ╰┈➤</Link>
            </div>
          </div>
        </Link>
        <Link to={"/edit/preferences"}>
          <div className="border-y border-blue-300 my-3 flex justify-between text-black cursor-pointer">
            <div className="p-3 m-3 text-black">
              <h3 className="font-bold text-lg">Job preferences </h3>
              <h5>
                {" "}
                Save specific details like minimum desired pay and schedule{" "}
              </h5>
            </div>
            <div className="py-6 font-extrabold text-xl m-1">
              <Link to={"/edit/preferences"}> ╰┈➤</Link>
            </div>
          </div>
        </Link>

        <div className="border-y border-blue-300 my-3 flex justify-between text-black cursor-pointer">
          <div className="p-3 m-3">
            <h3 className="font-bold text-lg">Hide jobs with these details </h3>
            <h5>
              Manage the qualificqtions & preferences used to job from your
              search{" "}
            </h5>
          </div>
          <div className="py-6 font-extrabold text-xl m-1">
            <h2> ╰┈➤</h2>
          </div>
        </div>

        <Link to={"/edit/readytowork"}>
          <div className="border-y border-blue-300 my-3 flex justify-between text-black cursor-pointer">
            <div className="p-3 m-3">
              <h3 className="font-bold text-lg">Ready to work </h3>
              <h5>
                Let employers know that you can begin working straight away.
              </h5>
            </div>
            <div className="py-6 font-extrabold text-xl m-1">
              <Link to={"/edit/readytowork"}> ╰┈➤</Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
