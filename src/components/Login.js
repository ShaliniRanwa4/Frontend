import React, { useState } from "react";
import { checkSignInValidateData } from "../utils/validate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
 

 const handleSignInSubmit = () => {
     const error = checkSignInValidateData(emailId, password);
     if (error) {
      setError("Error : "+error);
      return;
    }
    
    setError(null);
    
 }


  return (
    <div>
      <div className="flex justify-center items-center h-screen  mt-10 mb-20 ">
        <div className="card bg-base-300  w-96 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {isLogin ? "Login" : "Sign Up"}
            </h2>

            {!isLogin && (
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
                {/* <p>{error}</p> */}
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
                
                {/* <p>{error}</p> */}
              </>
            )}

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
            {/* <p className="text-red-400">{error}</p> */}
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

            {!isLogin && <label className="form-control w-full max-w-xs">
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
                </label>}


            <p className="text-red-400">{error}</p>
            


            {/* <p className="text-red-400">error</p> */}
            <div className="card-actions justify-center m-2">
              <button className="btn btn-primary" 
              // {isLogin?onClick={handleSignInSubmit}:onClick={handleSignUpSubmit}}
              onClick={handleSignInSubmit}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
            <p
              className="cursor-pointer m-auto font-semibold"
              // onSubmit={(e)=>e.preventDefault()}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "New User ? Sign Up here !!"
                : "Already Registered ? Login here!!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
