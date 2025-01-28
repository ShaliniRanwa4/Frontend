import React from "react";
import { Link } from "react-router-dom";

const EditReadytowork = () => {
  return (
    <div className="my-28">
      <div className="w-1/3 container mx-auto">
        <Link className="text-3xl my-2 text-white" to={"/profile"}>
          🔙
        </Link>
        <h1 className="flex justify-start font-bold text-4xl text-white py-3 my-1">
          Ready to work
        </h1>
        <span>Let employers know that you can begin working straight away.</span>
        <div className="form-control w-full my-4">
    <label className="label cursor-pointer">
      <span className="label-text text-lg text-white">I'm available to start immediately</span>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </label>
  </div>
  <div className="flex justify-center my-10 space-x-6">
    
<button className="btn btn-outline btn-primary font-semibold text-base">Save</button>

<button className="btn btn-outline font-semibold text-base">Cancel </button>
  </div>
      </div>
    </div>
  );
};

export default EditReadytowork;
