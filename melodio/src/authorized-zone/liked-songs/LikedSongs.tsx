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
