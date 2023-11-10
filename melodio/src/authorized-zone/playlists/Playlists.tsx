import './Playlists.scss';
import '../main/Main.scss'
import { NavigateFunction, useNavigate } from "react-router-dom";
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel';
import LeftPanel from '../main/left-panel/LeftPanel';
import NotMainHeader from './not-main-header/NotMainHeader';

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
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className='left-and-right-panels'>
        { <LeftPanel activeButtonName="Playlists" /> }
        <div className="right-panel">
          <div className="right-top-panel-wrap">
            { <RightTopPanel {...props}/> }
          </div>
          <div className='right-panel-content'>
            { < NotMainHeader text="Playlists" /> }
            <div className='playlists-content'>
              { GetUserPlaylists(props.getPlaylistsByLabel("user_playlist")) }
            </div>
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong} changePlayingSongState={props.changePlayingSongState}/> }
    </div>
  );
}


export { GetPlaylist, GetPlaylists, PlaylistClass };
export default Playlists;