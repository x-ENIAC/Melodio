import React, { Component }  from 'react';
import './SignIn.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../pictures/nota4.png"

function SignIn() {
  const [color, setColor] = useState("rgb(228, 228, 228, 1)");
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  const navigate = useNavigate();

  return (
    <div className="SignIn">
      <div className="SignIn-header">Sign in to Melodio</div>
      <img src={logo} className="App-logo"></img>
      <div className="SignIn-rectangle">
        <label>
          <div className="SignIn-div-settings">Username or email</div>
          <input
            type="text"
            name="username"
            className="SignIn-rectangle-input"
            />
        </label>
        <label>
          <div className="SignIn-div-settings">Password</div>
            <input
              type="text"
              name="username"
              className="SignIn-rectangle-input"
            />
        </label>
        <div>
          <button className="SignIn-sign-in-button" onClick={
          () => navigate("../main")}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
