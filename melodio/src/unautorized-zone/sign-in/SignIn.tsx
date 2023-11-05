import logo from './../../materials/logo.png';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignIn.scss';
import React from 'react';

function SignIn(props: any) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const inputTextFieldsList = [
    { name: "Username or email address" },
    { name: "Password"}
  ]

  let inputTextFields = inputTextFieldsList.map((fieldName) => {
    return (
      <div className='sign-input-box'>
        <div className="sign-div-settings">{ fieldName.name }</div>
        <input type="text" className='sign-input' name={ fieldName.name } />
      </div>
    )
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!login) {
      setError('The username field must not be empty!');
      return;
    }

    if (!password) {
      setError('The password field must not be empty!');
      return;
    }

    const tryUser = props.getUserByLogin(login);
    if (tryUser == undefined) {
      setError('This user doesn\'t exist!');
      return;
    }

    try {
      props.setUser(tryUser);
      navigate("../main");
    } catch {
      console.log("Some troubles")
    }
  }

  const navigate = useNavigate();

  return (
    <div className="sign">
      <div className="sign-header">Sign in to Melodio</div>
      <img src={logo} className="app-logo"></img>
      <div className="rectangle-with-sign-buttons">
        <div className='sign-input-box'>
          <div className="sign-div-settings">Username</div>
          <input type="username" className='sign-input' value={login} onChange={(event) => setLogin(event.target.value)}/>
        </div>
        <div className='sign-input-box'>
          <div className="sign-div-settings">Password</div>
          <input type="password" className='sign-input' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className='sign-error'>{error}</div>
        <div>
          <button className="sign-button" onClick={handleSubmit}>Sign in</button>
        </div>
      </div>
      <div className="sign-in-rectangle-with-another-button">
        <button className="another-sign-button" onClick={() => navigate("../signUp")}>New to Melodio? Create an account</button>
      </div>
    </div>
  );
}

export default SignIn;
