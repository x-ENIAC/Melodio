import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './StartPage.scss';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <div className="start-page-header">Melodio</div>
      <div className="start-page-description">Find your rhythm, elevate your mood</div>
      <div className="start-page-sign-rectangle">
        <p>Are you new here?</p>
        <div className='start-page-sign-buttons'>
          <button className="start-page-sign-button" onClick={
            () => navigate("/signIn")
          }>Sign in</button>

          <button  className="start-page-sign-button" onClick={
            () => navigate("/signUp")
          }>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
