import './LikedSongs.scss';
import '../main/Main.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import logo from './../../materials/logo.png'
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import { RenderSongs, Song } from './song/Song'
import LeftPanel from '../main/left-panel/LeftPanel';
import NotMainHeader from '../playlists/not-main-header/NotMainHeader';
import axios from "axios";

function LikedSongs(props: any) {
  const getLikedSongs = () => {
    const likedSongs: Song[] = [];
    const likedSongsIds = props.getPlaylistsByLabel("liked_playlist")[0].songs_list as Array<number>;
    likedSongsIds.forEach(id => {
      likedSongs.push(props.getSongById(id));
    });

    return RenderSongs(likedSongs, {...props});
  }

  const navigate = useNavigate();
  console.log("here:", props.getPlayingSong());

  var currentUserId = props.getCurrentUser().user_id;
  console.log("Current user id: ", currentUserId);

  // let gXHR = new XMLHttpRequest();
  // gXHR.setRequestHeader('Access-Control-Allow-Origin', '*')
  // gXHR.open("GET", "http://127.0.0.1:8080/playlists/11");
  // gXHR.send();

  // console.log(gXHR.status, gXHR.statusText);

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': '*'
    }
  });

  axiosInstance.get(`/users/${currentUserId}/likedSongs`)
  .then(response => {
    console.log(`Get data from /users/${currentUserId}/likedSongs:`, response.data);
  })
  .catch(error => {
    console.log("sad. ", error);
  });

  return (
    <div className="main">
      <div className='left-and-right-panels'>
       { <LeftPanel activeButtonName="Liked songs" /> }
        <div className="right-panel">
          <div className="right-top-panel-wrap">
            { <RightTopPanel {...props}/> }
          </div>
          { < NotMainHeader text="Liked songs" /> }
          <div className='liked-songs-content'>
            { getLikedSongs() }
          </div>
        </div>
      </div>
      { <BottomPanel {...props} /> }
    </div>
  );
}

export default LikedSongs;
