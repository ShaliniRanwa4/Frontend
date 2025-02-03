import React, { useState } from 'react'
import { checkSignInValidateData } from '../utils/validate';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {


     const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [emailId, setEmailId] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState(null);

const navigate=useNavigate()


      const handleSignInSubmit = () => {
          const error = checkSignInValidateData(emailId, password);
          if (error) {
            setError("Error : " + error);
            return;
          }
          setError(null);
        };


        const handleSignUp=()=>{
            return navigate("/admin/homepage")
        }


  return (
    <div>
    <div className="flex justify-center items-center h-screen mt-12 mb-32">
      <div className="card bg-base-300  w-96 shadow-xl ">
        <div className="card-body">
         
          <h2 className="card-title justify-center text-2xl">
           
            Sign Up
          </h2>

          <>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name :</span>
              </div>
              <input
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name :</span>
              </div>
              <input
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">EmailId ID :</span>
            </div>
            <input
              type="text"
              placeholder="E-mail"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password :</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Confirm Password :</span>
              </div>
              <input
                type="password"
                placeholder="Enter Password Again"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          {/* { isEmployee && <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Company / Organization :</span>
              </div>
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>} */}
          </>

          <p className="text-red-400">{error}</p>
          <div
            className="card-actions justify-center m-2"
            onClick={handleSignInSubmit}
          >
            <button className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
          </div>
          <Link to={"/login"} className="cursor-pointer m-auto font-semibold">
            Already Registered ? Login here!!
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp
