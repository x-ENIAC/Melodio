import logo from './../../materials/logo.png';
import { useNavigate } from "react-router-dom";
import './SignUp.scss';
import './../sign-in/SignIn.scss'
import React from 'react';

function SignUp(props: any) {
  const [login, setLogin] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatedPassword, setRepeatedPassword] = React.useState('');
  const [error, setError] = React.useState('');
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!login) {
      setError('The username field must not be empty!');
      return;
    }

    if (!email) {
      setError('The email field must not be empty!');
      return;
    }

    if (!password) {
      setError('The password field must not be empty!');
      return;
    }

    if (!repeatedPassword) {
      setError('The repeated password field must not be empty!');
      return;
    }

    if (password != repeatedPassword) {
      setError('Passwords must match!');
      return;
    }

    if (props.getUserByLogin(login) != undefined) {
      setError('This login is already exists!');
      return;
    }

    if (props.getUserByEmail(email) != undefined) {
      setError('This email is already exists!');
      return;
    }
    try {
      props.addUser(login, password, email);
      navigate("../main");
    } catch {
      console.log("Some troubles")
    }
  }

  const navigate = useNavigate();

  return (
    <div className="sign">
      <div className="sign-header">Sign up to Melodio</div>
      <img src={logo} className="app-logo"></img>
      <div className="rectangle-with-sign-buttons">
        <div className='sign-input-box'>
          <div className="sign-div-settings">Username</div>
          <input type="text" className='sign-input' value={login} onChange={(event) => setLogin(event.target.value)}/>
        </div>
        <div className='sign-input-box'>
          <div className="sign-div-settings">Email</div>
          <input type="text" className='sign-input' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div className='sign-input-box'>
          <div className="sign-div-settings">Password</div>
          <input type="text" className='sign-input' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className='sign-input-box'>
          <div className="sign-div-settings">Repeat password</div>
          <input type="text" className='sign-input' value={repeatedPassword} onChange={(event) => setRepeatedPassword(event.target.value)}/>
        </div>
        <div className='sign-error'>{error}</div>
        <div>
          <button className="sign-button" onClick={handleSubmit}>Sign up</button>
        </div>
      </div>
      <div className="sign-in-rectangle-with-another-button">
        <button className="another-sign-button" onClick={() => navigate("../signIn")}>Already have an account? Sign in</button>
        </div>
    </div>
  );
}

export default SignUp;