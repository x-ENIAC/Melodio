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
import { PlaylistClass } from './../authorized-zone/playlists/Playlists'
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

class currentPlayingSong {
  song: Song;
  is_playing: boolean;

  constructor(song: Song, is_playing: boolean) {
    this.song = song;
    this.is_playing = is_playing;
  }
}

function getDefaultCurrentPlayingSong() {
  return new currentPlayingSong(getTestSongs()[0], false);
}

function App() {
  const [currentUserInfo, changeCurrentUserInfo] = useState<User>(getDefaultTestUsers());
  let [users, setUsers] = useState<User[]>(getTestUsers());
  const [playlists, setPlaylists] = useState<PlaylistClass[]>(getTestPlaylists());
  const [songs, setSongs] = useState<Song[]>(getTestSongs());
  const [nowPlayingSong, changeNowPlayingSong] = useState<currentPlayingSong>(getDefaultCurrentPlayingSong());

  const getSongById = (songId: number) => {
    return songs[songs.findIndex((song) => song.id == songId)];
  }

  const getPlaylistById = (playlistId: number) => {
    return playlists[playlists.findIndex((playlist) => playlist.id == playlistId)];
  }

  const getPlaylistsByLabel = (label: string) => {
    let matchedPlaylists = playlists.map((playlist, index) => {
      if(playlist.label == label && playlist.user_id == currentUserInfo.user_id
        || playlist.label == label && playlist.user_id == -1)
        return playlist
    }).filter(item => item !== undefined);
    return matchedPlaylists;
  }

  const getSongsByPlaylistId = (playlistId: number) => {
    return getPlaylistById(playlistId).songs_list;
  }
  
  const getSongsByPattern = (subseq: string) => {
    let matchedSongs: Song[] = [];
    songs.forEach((song) => {
      if (song.name.toLocaleLowerCase().includes(subseq.toLocaleLowerCase())) {
        matchedSongs.push(song);
      }
    });
    return matchedSongs;
  }

  const changeSongLikedState = (song: Song) => {
    if (checkIsSongLikedForCurrentUser(song)) {
      return deleteSongFromPlaylist(song.id, 10);
    } else {
      return addSongToPlaylist(song.id, 10);
    }
  }

  const deleteSongFromPlaylist = (songId: number, playlistId: number) => {
    let playlistIndex = playlists.findIndex(playlist_ => playlist_.id == playlistId);
    let playlist = playlists[playlistIndex];
    if (playlist == undefined) {
      return false;
    }

    const playlistSongsIds = playlist.songs_list;
    const indesOfSong = (playlistSongsIds?.findIndex((songIdItem) => songIdItem == songId)) || 0;
    if (indesOfSong > -1) {
      playlist.songs_list?.splice(indesOfSong, 1);
    }
  }

  const addSongToPlaylist = (songId: number, playlistId: number) => {
    let playlistIndex = playlists.findIndex(playlist_ => playlist_.id == playlistId);
    let playlist = playlists[playlistIndex];
    if (playlist == undefined) {
      return false;
    }

    const playlistSongsIds = playlist.songs_list;
    const indesOfSong = (playlistSongsIds?.findIndex((songIdItem) => songIdItem == songId)) || 0;
    if (indesOfSong == -1) {
      playlist.songs_list?.push(songId);
    }
  }

  const setCurrentUser = (user: User) => {
    changeCurrentUserInfo(user);
  }

  const getCurrentUser = () => {
    return currentUserInfo;
  }

  const getUserByLogin = (login: string) => {
    return users[users.findIndex((user) => user.login == login)];
  }

  const getUserByEmail = (email: string) => {
    return users[users.findIndex((user) => user.email == email)];
  }
  
  const getPlayingSong = () => {
    return nowPlayingSong;
  }

  const changePlayingSong = (song: Song) => {
    const newPlayingSong = new currentPlayingSong(song, false);
    changeNowPlayingSong(newPlayingSong);
  }

  const changePlayingSongState = (is_playing: boolean) => {
    nowPlayingSong.is_playing = is_playing;
  }

  const checkIsSongLikedForCurrentUser = (song: Song) => {
    const likedSongs = getPlaylistsByLabel("liked_playlist")[0];
    if (likedSongs == undefined) {
      return false;
    }

    const likedSongsIds = likedSongs.songs_list;
    if (likedSongsIds && likedSongsIds.findIndex((id) => id == song.id) > -1)
      return true;
    return false;
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
    setCurrentUser(newUser);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/signIn" element={<SignIn setUser={setCurrentUser} getUserByLogin={getUserByLogin} />} />
      <Route path="/signUp" element={<SignUp setUser={setCurrentUser} getUserByLogin={getUserByLogin} getUserByEmail={getUserByEmail} addUser={addUser}/>} />
      <Route path="/search" element={<Search getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getSongsByPattern={getSongsByPattern} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} checkIsSongLikedForCurrentUser={checkIsSongLikedForCurrentUser} getCurrentUser={getCurrentUser} changePlayingSongState={changePlayingSongState} changeSongLikedState={changeSongLikedState} />} />
      <Route path="/main" element={<Main getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getSongsByPattern={getSongsByPattern} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} checkIsSongLikedForCurrentUser={checkIsSongLikedForCurrentUser} getCurrentUser={getCurrentUser} changePlayingSongState={changePlayingSongState} changeSongLikedState={changeSongLikedState} />} />
      <Route path="/likedSongs" element={<LikedSongs getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getSongsByPattern={getSongsByPattern} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} checkIsSongLikedForCurrentUser={checkIsSongLikedForCurrentUser} getCurrentUser={getCurrentUser} changePlayingSongState={changePlayingSongState} changeSongLikedState={changeSongLikedState} />} />
      <Route path="/playlists" element={<Playlists getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getSongsByPattern={getSongsByPattern} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} checkIsSongLikedForCurrentUser={checkIsSongLikedForCurrentUser} getCurrentUser={getCurrentUser} changePlayingSongState={changePlayingSongState} changeSongLikedState={changeSongLikedState} />} />
      <Route path="/playlists/:playlistId" element={<Playlist getSongsByPlaylistId={getSongsByPlaylistId} getPlaylistById={getPlaylistById} getPlaylistsByLabel={getPlaylistsByLabel} getSongById={getSongById} getSongsByPattern={getSongsByPattern} getPlayingSong={getPlayingSong} changePlayingSong={changePlayingSong} checkIsSongLikedForCurrentUser={checkIsSongLikedForCurrentUser} getCurrentUser={getCurrentUser} changePlayingSongState={changePlayingSongState} changeSongLikedState={changeSongLikedState} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
export {User, currentPlayingSong};