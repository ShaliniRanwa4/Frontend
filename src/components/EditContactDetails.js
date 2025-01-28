import React from "react";
import { Link } from "react-router-dom";

const EditContactDetails = () => {
  return (
    <div className="my-28 ">
      <div className="container mx-auto  w-3/5 ">
      <Link  className="text-3xl my-2 text-white" to={'/profile'}>🔙</Link>
        <h1 className="font-bold text-3xl flex justify-start my-6">
          Contact information{" "}
        </h1>
        <label className="text-lg  font-medium ">
          First Name <span className=" text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full mt-2 mb-5  "
        />

        <label className="text-lg  font-medium ">
          Last Name <span className=" text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full mt-2 mb-5 "
        />

        <label className="text-lg  font-medium ">
          Contact No <span className=" text-red-500">*</span>
        </label>
        < div className="flex justify-between mb-8">
        <select className="input input-bordered mt-2 px-8 ">
            <option value={"91"}>+91</option>
            <option value={"93"}>+93</option>
            <option value={"61"}>+61</option>
          </select>
           <input
            type=""
            placeholder=""
            className="input input-bordered w-full  mt-2 mb-2 "
          />
        </div>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>

        <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>

          <h1 className="mt-10 font-bold text-2xl flex justify-start my-4 ">Location</h1>
          <span className="mb-3">This helps match you with nearby jobs.</span>
          <h3 className="text-lg font-medium my-5"> Country</h3>
          <label className="text-lg  font-medium ">
          City , State <span className=" text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder=""
          className="input input-bordered w-full mt-2 mb-5 "
        />


<label className="text-lg  font-medium ">
          Street Adress  
        </label>
        <input
          type="text"
          placeholder=""
          className="input input-bordered w-full mt-2 mb-5 "
        />
         <label className="text-lg  font-medium ">
          Pincode 
        </label>
        <input
          type=""
          placeholder=""
          className="input input-bordered w-full mt-2 mb-5 "
        />


<div className="flex justify-center mt-3 "><button className="btn btn-outline font-bold text-lg btn-success w-1/6 ">Save</button></div>
      </div>
    </div>
  );
};

export default EditContactDetails;
