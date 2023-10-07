import './App.css';
import { useEffect, useState } from 'react';
import React, { Component }  from 'react';
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [color, setColor] = useState("rgb(92, 92, 92, 1)");
  const click = color => {
    setColor(color)
  }
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="App-header">Melodio</div>
      <div className="App-description">Find your rhythm, elevate your mood</div>
      <div className="App-sign">
        <p>Are you new here?</p>
          <button className="App-sign-in" onClick={
            () => navigate("signIn")
          }>Sign in</button>

          <button  className="App-sign-up" onClick={
            () => navigate("signUp")
          }>Sign up</button>
      </div>
    </div>
  );
}

export default App;
