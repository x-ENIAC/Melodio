import './SpecificPlaylist.scss';
import { RenderSongs, Song } from '../liked-songs/song/Song';
import { useParams } from "react-router-dom";
import RightTopPanel from '../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import '../main/Main.scss'
import LeftPanel from '../main/left-panel/LeftPanel';
import NotMainHeader from './not-main-header/NotMainHeader';
import { useEffect, useState } from 'react';

function SpecificPlaylist(props: any) {
  const RenderPlaylist = (songs: any) => {
    const songsObjects: Song[] = [];
    for (let song in songs) {
      var currentSong = new Song(songs[song]["id"], songs[song]["name"], songs[song]["author"], songs[song]["duration"]);
      songsObjects.push(currentSong);
    }
    return RenderSongs(songsObjects, props);
  }

  const [playlistContent, setPlaylistContent] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/playlists/${currentPlaylistId}/songs`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        setPlaylistContent(data);
      })
      .catch(err => {
        console.log("Troubles with rendering playlist content.");
      });
  }, []);

  const params = useParams();
  
  const currentPlaylistId = Number(params['playlistId']);

  return (
    <div className="main">
      <div className='left-and-right-panels'>
        { <LeftPanel /> }
        <div className="right-panel">
          <div className="right-top-panel-wrap">
            { <RightTopPanel {...props}/> }
          </div>
          { < NotMainHeader text={ props.getPlaylistById(currentPlaylistId).name } /> }
          <div className='liked-songs-content'>
            { RenderPlaylist(playlistContent) }
          </div>
        </div>
      </div>
      { <BottomPanel {...props}/> }
    </div>
  );
}

export default SpecificPlaylist;