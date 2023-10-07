import React, { Component }  from 'react';
import './Main.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../pictures/nota4.png"

function Main() {
  const [color, setColor] = useState("rgb(239, 239, 239, 1)");
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  const navigate = useNavigate();

  return (
    <div className="Main">
      <div className="Main-left-panel">
        <img src={logo} className="Main-logo"></img>
        <div className="Main-left-panel-active-button">
          <button className="Main-active-button" onClick={
              () => navigate("../main")}>Main page</button>
        </div>
        <div className="Main-left-panel-deactive-button">
          <button className="Main-deactive-button" onClick={
              () => navigate("../likedSongs")}>Liked songs</button>
        </div>
        <div className="Main-left-panel-deactive-button">
          <button className="Main-deactive-button" onClick={
              () => navigate("../playlists")}>Playlists</button>
        </div>
      </div>
      <main className="Main-right-panel">
        <div className='Main-header'>Main page</div>
      </main>
        
        {/* <img src={logo} className="App-logo"></img>
        <div className="SignIn-rectangle">
          {/* <form> */}
            {/* <label>
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
              () => navigate("../main")}>Sign in</button> */}
            {/* </div> */}
           {/* </form> */}
        {/* </div> */}
    </div>
  );
}

export default Main;
