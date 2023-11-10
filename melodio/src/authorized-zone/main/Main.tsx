import './Main.scss';
import { useNavigate } from "react-router-dom";
import logo from './../../materials/logo.png';
import RightTopPanel from './../right-top-panel/RightTopPanel';
import BottomPanel from '../bottom-panel/BottomPanel'
import { PlaylistClass } from './../playlists/Playlists'
import MainHeader from './main-header/MainHeader';
import LeftPanel from './left-panel/LeftPanel';


function GetSystemPlaylists(playlists: PlaylistClass[]) {
  const navigate = useNavigate();
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
  return (
    <div className="main">
      <div className='left-and-right-panels'>
        { <LeftPanel activeButtonName="Main page" /> }
        <div className="right-panel">
          <div className="right-top-panel-wrap">
            { <RightTopPanel {...props}/> }
          </div>
          { <MainHeader {...props} /> }
          <div className='right-panel-content'>
            <div className='main-content'>
              { GetSystemPlaylists(props.getPlaylistsByLabel("system_playlist")) }
            </div>
          </div>
        </div>
      </div>
      { <BottomPanel {...props}/> }
    </div>
  );
}

export default Main;
