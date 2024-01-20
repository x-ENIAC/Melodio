import './Song.scss';
import '../../main/Main.scss'
import {useEffect, useReducer, useState} from 'react';
import nextSong from "./../../../materials/nextSong.png"
import previousSong from "./../../../materials/previousSong.png"
import play from "./../../../materials/play.png"
import playSongNotInBottom from './../../../materials/playSongNotInBottom.png'
import songIsLiked from './../../../materials/heartFilled.png'
import songIsNotLiked from './../../../materials/heartNotFilled.png'
import pauseInBottomPanel from './../../../materials/pauseInBottomPanel.png'
import pauseNotInBottomPanel from './../../../materials/pauseNotInBottomPanel.png'
import React from 'react';

class Song {
  id: number;
  name: string;
  author: string;
  duration: string;
  
  constructor(id: number, name: string, author: string, duration: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.duration = duration;
  }
}

function SongInBottomPanel(props: any) {
  let currentSong = props.getPlayingSong();

  const [is_play, set_is_play] = useState(currentSong.is_playing);
  const handlePlayClick = () => {
    console.log("PUSH!!! Is_play:", is_play);
    if (is_play) {
      fetch(`http://127.0.0.1:8080/song/${currentSong.song.id}/pause`);
    } else {
      fetch(`http://127.0.0.1:8080/song/${currentSong.song.id}/play`);
    }
    set_is_play(!is_play);
    props.changePlayingSongState(!currentSong.is_playing);
  }

  return (
    <div className='song'>
      <div className='song-info'>
        <div className='song-name'> { currentSong.song.name } </div>
        <div className='song-author'> { currentSong.song.author } </div>
      </div>
      <div className='song-actions'>
        <div className='song-box-for-items'>
          <img src={previousSong} className="song-move-button"/>
        </div>
        <div className='song-box-for-items'>
          <img src={is_play ? pauseInBottomPanel : play} className="song-play-button" onClick={() => handlePlayClick()}/>
        </div>
        <div className='song-box-for-items'>
          <img src={nextSong} className="song-move-button"/>
        </div>
      </div>
      <div className='song-duration'>{currentSong.song.duration}</div>
    </div>
  );
}

function RenderSearchedSongs(songs: Song[], props: any) {
  const handleHeartClick = (song: Song) => {
    props.changeSongLikedState(song);
  }

  return songs.map((song) => {
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
            <img src={props.checkIsSongLikedForCurrentUser(song) ? songIsLiked : songIsNotLiked} className='song-like-image' onClick={() => handleHeartClick(song)}/>
          </div>
          <div className='song-duration'>{song.duration}</div>
        </div>
      </div>
    </div>
    )
  });
}

function RenderSongs(songs: Song[], props: any) {
  let currentSong = props.getPlayingSong();
  const [playingSong, localChangePlayingSong] = useState(props.getPlayingSong());

  const handlePlayClick = (song: Song) => {
    props.changePlayingSong(song, true);
    localChangePlayingSong(props.getPlayingSong());
  }

  const handleHeartClick = (song: Song) => {
    props.changeSongLikedState(song);
  }

  return songs.map((song) => {
    return (
      <div className='song-wrapper'>
      <div className='song'>
        <div className='song-info'>
          <div className='song-name'> { song.name } </div>
          <div className='song-author'>{ song.author } </div>
        </div>
        <div className='song-details'>
        <div className='song-box-for-items'>
            <img src={playingSong.is_playing && song.id == currentSong.id ? pauseNotInBottomPanel : playSongNotInBottom} className='song-play-not-in-bottom-image' onClick={() => handlePlayClick(song)}/>
          </div>
          <div className='song-is-liked-button'>
            <img src={props.checkIsSongLikedForCurrentUser(song) ? songIsLiked : songIsNotLiked} className='song-like-image' onClick={() => handleHeartClick(song)}/>
          </div>
          <div className='song-duration'>{song.duration}</div>
        </div>
      </div>
    </div>
    )
  });
}

export default SongInBottomPanel;
export { Song, SongInBottomPanel, RenderSongs, RenderSearchedSongs };