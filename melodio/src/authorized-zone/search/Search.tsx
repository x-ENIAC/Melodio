import './Search.scss';
import '../main/Main.scss'
import { useNavigate } from "react-router-dom";
import logo from './../../materials/logo.png';
import search from "./../../materials/search.png"
import BottomPanel from '../bottom-panel/BottomPanel';

function Search(props: any) {
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

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="left-and-right-panels">
        <div className="left-panel">
          <img src={logo} className="main-logo" onClick={() => navigate("../main")}/>
          { buttons }
        </div>
        <div className="right-panel">
          <div className='right-top-panel-wrap'>
            <div className='right-top-panel'>
              <div className='search-panel'>
                <input type="text" name="username" placeholder='name' className="search-music-input"/>
              </div>
              <img src={search} className="main-search" onClick={() => navigate("../search")}/>
              <div className='avatar-circle'><div className="avatar-text">L</div></div>
            </div>
          </div>
          <div className='not-main-header'>Search</div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong}/> }
    </div>
  );
}

export default Search;
