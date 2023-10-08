import React, { Component }  from 'react';
import './Playlists.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../pictures/nota4.png"
import search from "../../pictures/search.png"

function Playlists() {
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
      <section className="Main-left-panel">
        <img src={logo} className="Main-logo" onClick={() => navigate("../main")}/>
        <div className="Main-left-panel-deactive-button">
          <button className="Main-deactive-button" onClick={
              () => navigate("../main")}>Main page</button>
        </div>
        <div className="Main-left-panel-deactive-button">
          <button className="Main-deactive-button" onClick={
              () => navigate("../likedSongs")}>Liked songs</button>
        </div>
        <div className="Main-left-panel-active-button">
          <button className="Main-active-button" onClick={
              () => navigate("../playlists")}>Playlists</button>
        </div>
      </section>
      <main className="Main-right-panel">
        <div><img src={search} className="Main-search" onClick={() => navigate("../search")}/></div>
        <div className='Main-header'>Playlists</div>
      </main>
    </div>
  );
}

export default Playlists;
