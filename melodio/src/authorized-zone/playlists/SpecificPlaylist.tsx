import './SpecificPlaylist.scss';
import { RenderSongs, Song } from '../liked-songs/song/Song';
import { useNavigate, useParams } from "react-router-dom";
import playSongNotInBottom from './../../materials/playSongNotInBottom.png';
import songIsLiked from './../../materials/heartFilled.png';
import songIsNotLiked from './../../materials/heartNotFilled.png';
import logo from './../../materials/logo.png';
import RightTopPanel from '../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import '../main/Main.scss'
import LeftPanel from '../main/left-panel/LeftPanel';
import NotMainHeader from './not-main-header/NotMainHeader';

function SpecificPlaylist(props: any) {
  const getSongsInThisPlaylist = (currentPlaylistId: number) => {
    const songs: Song[] = [];
    const songsIds = props.getPlaylistById(currentPlaylistId).songs_list as Array<number>;
    if (songsIds == null) {
      return (
        <div className='no-songs-inscription'>There are no songs here yet!</div>
      );
    }
    songsIds.forEach(id => {
      songs.push(props.getSongById(id));
    });
    return RenderSongs(songs, props);
  }

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
            { getSongsInThisPlaylist(currentPlaylistId) }
          </div>
        </div>
      </div>
      { <BottomPanel {...props}/> }
    </div>
  );
}

export default SpecificPlaylist;