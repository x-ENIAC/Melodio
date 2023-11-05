import './SpecificPlaylist.scss';
import { Song } from '../liked-songs/song/Song';
import { useNavigate, useParams } from "react-router-dom";
import playSongNotInBottom from './../../materials/playSongNotInBottom.png';
import songIsLiked from './../../materials/heartFilled.png';
import logo from './../../materials/logo.png';
import RightTopPanel from '../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import '../main/Main.scss'

function SpecificPlaylist(props: any) {
  const buttonsList = [
    { name: "Main page", navigatePath: "../main", buttonClassName: "deactive-button", divClassName: "deactive-div" },
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
  const params = useParams();
  
  console.log("props:", props);
  const currentPlaylistId = Number(params['playlistId']);
  console.log(currentPlaylistId);

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
          <div className='not-main-header'>{ props.getPlaylistById(currentPlaylistId).name }</div>
          <div className='liked-songs-content'>
            { getSongsInThisPlaylist(currentPlaylistId) }
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong}/> }
    </div>
  );
}

export default SpecificPlaylist;