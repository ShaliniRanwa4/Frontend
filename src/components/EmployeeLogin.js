import React, { useState } from "react";
import { checkSignInValidateData } from "../utils/validate";
import { Link, useNavigate } from "react-router-dom";

const EmployLogin = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    const error = checkSignInValidateData(emailId, password);
    if (error) {
      setError("Error : " + error);
      return;
    }

    setError(null);
  };

  const handleLogin = () => {
    return navigate("/admin/homepage");
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen  mx-auto ">
        <div className="card bg-base-300  shadow-xl w-1/4 h-auto ">
          <div className="card-body ">
            <h2 className="card-title justify-center text-2xl">Login</h2>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">EmailId ID :</span>
              </div>
              <input
                type="text"
                placeholder="E-mail"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full"
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
                className="input input-bordered w-full "
              />
            </label>

            <p className="text-red-400">{error}</p>

            <div
              className="card-actions justify-center mb-5"
              onClick={handleLoginSubmit}
            >
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
            <Link
              to={"/employeeSignUp"}
              className="cursor-pointer mx-auto font-semibold"
            >
              New User ? Sign Up here !!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployLogin;
