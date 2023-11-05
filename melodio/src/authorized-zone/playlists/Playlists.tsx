import './Playlists.scss';
import '../main/Main.scss'
import { NavigateFunction, useNavigate } from "react-router-dom";
import logo from './../../materials/logo.png';
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import { Song } from '../liked-songs/song/Song';

class PlaylistClass {
  id: number;
  name: string;
  description: string;
  label: string;
  songs_list: number[] | null;
  user_id: number;
  
  constructor(id: number, name: string, description: string, label: string, songs_list: number[] | null, user_id: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.label = label;
    this.songs_list = songs_list;
    this.user_id = user_id;
  }
};

function GetUserPlaylists(playlists: PlaylistClass[]) {
  const navigate = useNavigate();
  console.log("User playlists: ", playlists);
  return playlists.map((playlist) => {
    return (
      <div className='playlist-content'>
        <div className='playlist'>{playlist.name}</div>
        <div className='playlist-description' onClick={() => navigate("../playlists/" + playlist.id)}>{playlist.description}</div>
      </div>
    )
  });
}

function GetPlaylists(playlists: Array<PlaylistClass>, is_user_playlists_needed: boolean) {
  var navigate = useNavigate();
  console.log(playlists);
  let buttons = playlists.map((playlist) => {
    if (is_user_playlists_needed && playlist.label == 'user_playlist' ||
        !is_user_playlists_needed && playlist.label != 'user_playlist')
      return (
        <div className='playlist-content'>
          <div className='playlist'>{playlist.name} {playlist.id}</div>
          <div className='playlist-description' onClick={() => navigate("../main")}>{playlist.description}</div>
        </div>
      )
  })

  return (
    <div className='playlists-content'>
    { buttons }
    </div>
  );
}

function GetPlaylist(playlistId: number, playlistName: string, playlistDescription: string, navigate: NavigateFunction) {
  return (
    <div className='playlist-content'>
      <div className='playlist'>{playlistName} {playlistId}</div>
      <div className='playlist-description' onClick={() => navigate("../main")}>{playlistDescription}</div>
    </div>
  )
}

function Playlists(props: any) {
  const buttonsList = [
    { name: "Main page", navigatePath: "../main", buttonClassName: "deactive-button", divClassName: "deactive-div" },
    { name: "Liked songs", navigatePath: "../likedSongs", buttonClassName: "deactive-button", divClassName: "deactive-div"},
    { name: "Playlists", navigatePath: "../playlists", buttonClassName: "active-button", divClassName: "active-div"}
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
          <div className='right-panel-content'>
            <div className='playlists-header'>Playlists</div>
            <div className='playlists-content'>
              {/* { GetPlaylist(10, "Playlist 1", "Description", navigate) }
              { GetPlaylist(11, "Playlist 2", "Description", navigate) }
              { GetPlaylist(12, "Playlist 3", "Description", navigate) }
              { GetPlaylist(13, "Playlist 4", "Description", navigate) }
              { GetPlaylist(14, "Playlist 5", "Description", navigate) }
              { GetPlaylist(15, "Playlist 6", "Description", navigate) } */}
              {/* { GetPlaylists(siteContent.getPlaylists(), false) } */}
              { GetUserPlaylists(props.getPlaylistsByLabel("user_playlist")) }
            </div>
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong}/> }
    </div>
  );
}


export { GetPlaylist, GetPlaylists, PlaylistClass };
export default Playlists;