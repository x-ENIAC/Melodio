import React, { Component }  from 'react';
import './SignUp.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../pictures/nota4.png"

function SignUp() {
  const [color, setColor] = useState("rgb(228, 228, 228, 1)");
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  const navigate = useNavigate();

  return (
    <div className="SignUp">
      <div className="SignUp-header">Sign up to Melodio</div>
      <img src={logo} className="App-logo"></img>
      <div className="SignUp-rectangle">
        <label>
          <div className="SignUp-div-settings">Username</div>
          <input
            type="text"
            name="username"
            className="SignUp-rectangle-input"
            />
        </label>
        <label>
          <div className="SignUp-div-settings">Email address</div>
            <input
              type="text"
              name="username"
              className="SignUp-rectangle-input"
            />
        </label>
        <label>
          <div className="SignUp-div-settings">Password</div>
            <input
              type="text"
              name="username"
              className="SignUp-rectangle-input"
            />
        </label>
        <label>
          <div className="SignUp-div-settings">Repeat password</div>
            <input
              type="text"
              name="username"
              className="SignUp-rectangle-input"
            />
        </label>
        <div>
          <button className="SignUp-sign-in-button" onClick={() => navigate("../main")}>Sign up</button>
        </div>
      </div>
      <div className="SignUp-rectangle">
        <button className="Another-button" onClick={() => navigate("../signIn")}>Already have an account? Sign in</button>
      </div>
    </div>
  );
}

export default SignUp;
