import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import Search from "./main/search/Search";
import Main from "./main/Main";
import LikedSongs from "./main/liked-songs/LikedSongs";
import Playlists from "./main/playlists/Playlists";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router, Routes, Route, useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/search" element={<Search />} />
      <Route path="/main" element={<Main />} />
      <Route path="/likedSongs" element={<LikedSongs />} />
      <Route path="/playlists" element={<Playlists />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
