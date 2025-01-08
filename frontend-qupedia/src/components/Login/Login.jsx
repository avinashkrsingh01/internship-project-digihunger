import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="app-container-lo">
      <div className="form-container-lo">
        <h1 className="logo-lo">Qupedia</h1>
        {!isSignup ? (
          // Login Page
          <>
            <input type="email" placeholder="Email" className="input-field-lo" />
            <input
              type="password"
              placeholder="Password"
              className="input-field-lo"
            />
            <button className="action-button-lo">Login</button>
            <p className="switch-text-lo">
              Don't have an account?{" "}
              <span onClick={handleSwitch} className="link-text-lo">
                Create
              </span>
            </p>
          </>
        ) : (
          // Signup Page
          <>
            <input type="text" placeholder="Name" className="input-field-lo" />
            <input type="email" placeholder="Email" className="input-field-lo" />
            <input
              type="password"
              placeholder="Password"
              className="input-field-lo"
            />
            <input type="text" placeholder="Mobile No." className="input-field-lo" />
            <input type="text" placeholder="Enter City" className="input-field-lo" />
            <button className="action-button-lo">Sign Up</button>
            <p className="switch-text-lo">
              Already have an account?{" "}
              <span onClick={handleSwitch} className="link-text-lo">
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
