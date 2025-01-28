import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginJobSeeker = () => {
    return navigate("/login");
  };

  const handleLoginEmployer = () => {
    return navigate("/employLogin");
  };
  return (
    <div>
      <div className="navbar bg-base-300 w-full shadow-lg p-2 top-0 z-50 fixed ">
        <div className="flex-1 ">
          {/* <button className="btn btn-ghost text-xl">Job Portal</button>
           */}
          <Link to={"/"} className="font-extrabold text-3xl">
            {" "}
            Job Portal
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {/* <Link to={"/login"}>login</Link> */}
          <button className="btn btn-outline ">Search</button>
          <button
            className="btn btn-outline btn-success mx-4"
            onClick={handleLoginJobSeeker}
          >
            Job seeker Log In/Sign In
          </button>
          <button
            className="btn btn-outline btn-warning"
            onClick={handleLoginEmployer}
          >
            {" "}
            Employer Log In/Sign In{" "}
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between text-base ">
                  Profile
                  <span className="badge">Edit</span>
                </Link>
              </li>
              <li>
                <Link to={"/settings"} className="text-base">Settings</Link>
              </li>
              <li>
                <Link to={"/logout"} className="text-base">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
