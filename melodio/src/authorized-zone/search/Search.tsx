import './Search.scss';
import '../main/Main.scss'
import BottomPanel from '../bottom-panel/BottomPanel';
import { RenderSearchedSongs, RenderSongs, Song } from '../liked-songs/song/Song';
import RightTopPanel from '../right-top-panel/RightTopPanel';
import { useState } from 'react';
import LeftPanel from '../main/left-panel/LeftPanel';
import NotMainHeader from '../playlists/not-main-header/NotMainHeader';


function Search(props: any) {
  // const [searchText, setSearchText] = useState<string>('');
  // const [searchResult, setSearchResult] = useState<string>('');
  const [isEnterPressed, setIsEnterPressed] = useState<boolean>(false);

  const handleKeyDown = (event: any) => {
    if (event.key == 'Enter') {
      setIsEnterPressed(true);
    }
  }

  const submitFoundSongs = (songs: Song[]) => {
    return RenderSearchedSongs(songs, props);
  }

  return (
    <div className="main">
      <div className="left-and-right-panels">
        { <LeftPanel /> }
        <div className="right-panel">
          <div className='right-top-panel-wrap'>
            {/* <div className='right-top-panel'>
              <div className='search-panel'>
                <input type="text" name="username" placeholder='name' className="search-music-input" onChange={(event) => setSearchText(event.target.value)} onKeyDown={handleKeyDown}/>
              </div>
              <img src={search} className="main-search" onClick={() => navigate("../search")}/>
              <div className='avatar-circle'><div className="avatar-text">L</div></div>
            </div> */}
            { <RightTopPanel submitFoundSongs={submitFoundSongs} {...props}/> }
          </div>
          { < NotMainHeader text="Search" /> }
          <div className='liked-songs-content'>
            { isEnterPressed == true ? submitFoundSongs(props.submitFoundSongs()) : "" }
          </div>
        </div>
      </div>
      { <BottomPanel getSongsByPlaylistId={props.getSongsByPlaylistId} getPlaylistsByLabel={props.getPlaylistsByLabel} getSongById={props.getSongById} getPlayingSong={props.getPlayingSong} changePlayingSong={props.changePlayingSong} changePlayingSongState={props.changePlayingSongState}/> }
    </div>
  );
}

export default Search;
