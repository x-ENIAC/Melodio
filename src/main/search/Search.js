import React, { Component }  from 'react';
import './Search.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../../pictures/nota4.png"
import search from "../../pictures/search.png"

function Search() {
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
        <div className="Main-left-panel-deactive-button">
          <button className="Main-deactive-button" onClick={
              () => navigate("../playlists")}>Playlists</button>
        </div>
      </section>
      <main className="Main-right-panel">
        <img src={search} className="Main-search" onClick={() => navigate("../search")}/>
        <input
          type="text"
          name="username"
          className="Search-rectangle-input"
        />
        <div className='Main-header'>Search</div>
      </main>
    </div>
  );
}

export default Search;