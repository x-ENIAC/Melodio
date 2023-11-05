import './Main.scss';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import logo from './../../materials/logo.png';
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel'
import { GetPlaylist, PlaylistClass } from './../playlists/Playlists'
import { Song } from '../liked-songs/song/Song';

function getPlaylistsList() {
  const playlistsList = [
    new PlaylistClass(0, "Playlist 0", "Popular songs", "popular", null, -1),
    new PlaylistClass(1, "Playlist 1", "New songs", "new", null, -1),
    new PlaylistClass(10, "User Playlist 1", "User playlist description", "user_playlist", null, -1),
    new PlaylistClass(11, "User Playlist 2", "User playlist description", "user_playlist", null, -1),
    new PlaylistClass(12, "User Playlist 3", "User playlist description", "user_playlist", null, -1),
    // { id: 0, name: "Playlist 0", description: "Popular songs", label: "popular" },
    // { id: 1, name: "Playlist 1", description: "New songs", label: "new" },
    // { id: 10, name: "User Playlist 1", description: "Playlist name", label: "user_playlist" },
    // { id: 11, name: "User Playlist 2", description: "Playlist name", label: "user_playlist" },
    // { id: 12, name: "User Playlist 3", description: "Playlist name", label: "user_playlist" }
  ]
  return playlistsList;
}

function GetSystemPlaylists(playlists: PlaylistClass[]) {
  const navigate = useNavigate();
  console.log("Playlists: ", playlists);
  return playlists.map((playlist) => {
    return (
      <div className='playlist-content'>
        <div className='playlist'>{playlist.name}</div>
        <div className='playlist-description' onClick={() => navigate("../playlists/" + playlist.id)}>{playlist.description}</div>
      </div>
    )
  });
}

function Main(props: any) {
  getPlaylistsList();
  const buttonsList = [
    { name: "Main page", navigatePath: "../main", buttonClassName: "active-button", divClassName: "active-div" },
    { name: "Liked songs", navigatePath: "../likedSongs", buttonClassName: "deactive-button", divClassName: "deactive-div"},
    { name: "Playlists", navigatePath: "../playlists", buttonClassName: "deactive-button", divClassName: "deactive-div"}
  ]

  let buttons = buttonsList.map((buttonName) => {
    return (
      <div className={ buttonName.divClassName }>
        <button className={ buttonName.buttonClassName } onClick={
            () => navigate(buttonName.navigatePath)}>{ buttonName.name }</button>
      </div>
    )
  })

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className='left-and-right-panels'>
        <div className="left-panel">
          <img src={logo} className="main-logo" onClick={() => navigate("../main")}/>
          { buttons }
        </div>
        <div className="right-panel">
          <div className="right-top-panel-wrap">
            { <RightTopPanel/> }
          </div>
          <div className='main-header'>
            Hello, username!
            <br/>
            <br/>
            What are we going to listen to today?
          </div>
          <div className='right-panel-content'>
            <div className='main-content'>
              { GetSystemPlaylists(props.getPlaylistsByLabel("system_playlist")) }
            </div>
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong}/> }
    </div>
  );
}

export default Main;
