import './App.scss';
import StartPage from '../unautorized-zone/start-page/StartPage';
import SignIn from '../unautorized-zone/sign-in/SignIn';
import SignUp from '../unautorized-zone/sign-up/SignUp';
import Main from '../authorized-zone/main/Main';
import Playlist from '../authorized-zone/playlists/SpecificPlaylist';
import Playlists from '../authorized-zone/playlists/Playlists';

import LikedSongs from '../authorized-zone/liked-songs/LikedSongs'
import Search from '../authorized-zone/search/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GetPlaylists, PlaylistClass } from './../authorized-zone/playlists/Playlists'
import { Song } from './../authorized-zone/liked-songs/song/Song'
import { useState } from 'react';
import getTestPlaylists from './tmp-db/Playlists';
import getTestUsers, { getDefaultTestUsers } from './tmp-db/Users';
import getTestSongs from './tmp-db/Songs';

class User {
  user_id: number;
  login: string;
  password: string;
  email: string;
  
  constructor(user_id: number, login: string, password: string, email: string) {
    this.user_id = user_id;
    this.login = login;
    this.password = password;
    this.email = email;
  }
}

function App() {
  const [currentUserInfo, changeCurrentUserInfo] = useState<User>(getDefaultTestUsers());
  const [users, setUsers] = useState<User[]>(getTestUsers());
  const [playlists, setPlaylists] = useState<PlaylistClass[]>(getTestPlaylists());
  const [songs, setSongs] = useState<Song[]>(getTestSongs());
  const [nowPlayingSong, setNowPlayingSong] = useState<Song>(getTestSongs()[0]);

  const getSongById = (songId: number) => {
    return songs[songs.findIndex((song) => song.id == songId)];
  }

  const getPlaylistById = (playlistId: number) => {
    return playlists[playlists.findIndex((playlist) => playlist.id == playlistId)];
  }

  const getPlaylistsByLabel = (label: string) => {
    const matchedPlaylists = playlists.map((playlist, index) => {
      if(playlist.label == label && playlist.user_id == currentUserInfo.user_id
        || playlist.label == label && playlist.user_id == -1)
        return playlist
    }).filter(item => item !== undefined);
    return matchedPlaylists;
  }

  const getSongsByPlaylistId = (playlistId: number) => {
    return getPlaylistById(playlistId).songs_list;
  }

  const setCurrentUser = (user: User) => {
    changeCurrentUserInfo(user);
  }

  const getUserByLogin = (login: string) => {
    return users[users.findIndex((user) => user.login == login)];
  }
  
  const getPlayingSong = () => {
    console.log("getPlayingSong:", nowPlayingSong);
    return nowPlayingSong;
  }

  const changePlayingSong = (song: Song) => {
    setNowPlayingSong(song);
  }

  const addUser = (newUserLogin: string, newUserPassword: string, newUserEmail: string) => {
    const maxExistingUserId = users[users.length - 1].user_id;
    const newUser = {
      user_id: maxExistingUserId + 1,
      login: newUserLogin,
      password: newUserPassword,
      email: newUserEmail
    };
    const newUsers = [
      ...getTestUsers(),
      newUser
    ];
    setUsers(newUsers);
    console.log(newUsers);
    console.log(users);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/signIn" element={<SignIn setUser={setCurrentUser} getUserByLogin={getUserByLogin} />} />
      <Route path="/signUp" element={<SignUp setUser={setCurrentUser} getUserByLogin={getUserByLogin} addUser={addUser}/>} />
      <Route path="/search" element={<Search getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong}/>} />
      <Route path="/main" element={<Main getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} />} />
      <Route path="/likedSongs" element={<LikedSongs getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} />} />
      <Route path="/playlists" element={<Playlists getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong}/>} />
      <Route path="/playlists/:playlistId" element={<Playlist getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
export {User};