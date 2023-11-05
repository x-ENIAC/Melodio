import './LikedSongs.scss';
import '../main/Main.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import logo from './../../materials/logo.png'
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import RenderSong, { Song } from './song/Song'
import { PlaylistClass } from '../playlists/Playlists';
import nextSong from "./../../materials/nextSong.png"
import previousSong from "./../../materials/previousSong.png"
import play from "./../../materials/play.png"
import playSongNotInBottom from './../../materials/playSongNotInBottom.png'
import songIsLiked from './../../materials/heartFilled.png'
import songIsNotLiked from './../../materials/heartNotFilled.png'
import pauseInBottomPanel from './../../materials/pauseInBottomPanel.png'
// import { GetLikedSongs } from './song/Song'

function LikedSongs(props: any) {
  const buttonsList = [
    { name: "Main page", navigatePath: "../main", buttonClassName: "deactive-button", divClassName: "deactive-div" },
    { name: "Liked songs", navigatePath: "../likedSongs", buttonClassName: "active-button", divClassName: "active-div"},
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

  const getLikedSongs = () => {
    const likedSongs: Song[] = [];
    const likedSongsIds = props.getPlaylistsByLabel("liked_playlist")[0].songs_list as Array<number>;
    likedSongsIds.forEach(id => {
      likedSongs.push(props.getSongById(id));
    });
    return likedSongs.map((song) => {
      return (
        <div className='song-wrapper'>
        <div className='song'>
          <div className='song-info'>
            <div className='song-name'> { song.name } </div>
            <div className='song-author'>{ song.author } </div>
          </div>
          <div className='song-details'>
          <div className='song-box-for-items'>
              <img src={playSongNotInBottom} className='song-play-not-in-bottom-image'/>
            </div>
            <div className='song-is-liked-button'>
              <img src={songIsLiked} className='song-like-image'/>
            </div>
            <div className='song-duration'>{song.duration}</div>
          </div>
        </div>
      </div>
      )
    });
  }

  const navigate = useNavigate();
  console.log("here:", props.getPlayingSong());

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
          <div className='not-main-header'>Liked songs</div>
          <div className='liked-songs-content'>
            { getLikedSongs() }
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong}/> }
    </div>
  );
}

export default LikedSongs;
