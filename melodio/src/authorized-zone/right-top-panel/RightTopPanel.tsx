import { useLocation, useNavigate } from 'react-router-dom';
import '../main/Main.scss'
import './RightTopPanel.scss'
import search from "./../../materials/search.png"
import Avatar from './avatar/Avatar';
import { useState } from 'react';
import { RenderSearchedSongs, RenderSongs, Song } from '../liked-songs/song/Song';

function RightTopPanel(props: any) {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Song[]>([]);
  const [isEnterPressed, setIsEnterPressed] = useState<boolean>(false);

  const handleKeyDown = (event: any) => {
    if (event.key == 'Enter') {
      setSearchResult(props.getSongsByPattern(searchText));
      setIsEnterPressed(true);
      props.submitFoundSongs(props.getSongsByPattern(searchText));
    }
  }

  const getSearchedSongs = () => {
    console.log(props.getSongsByPattern(searchText));
    const searchedSongs = props.getSongsByPattern(searchText) as Array<Song>;
    return RenderSearchedSongs(searchedSongs, {...props});
  }

  var navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);

  const isItSearchPage = (location.pathname.includes('search') ? true : false);
  console.log(isItSearchPage);

  return (
    <div className='right-top-panel'>
      { isItSearchPage &&
        <div className='search-panel'>
          <input type="text" name="username" placeholder='name' className="search-music-input" onChange={(event) => setSearchText(event.target.value)} onKeyDown={handleKeyDown}/>
        </div>
      }
      <img src={search} className="main-search" onClick={() => navigate("../search")}/>
      {/* <div className='avatar-circle'>
        <div className="avatar-text">L</div>
      </div> */}
      { < Avatar {...props}/> }
    </div>
  );
}

export default RightTopPanel;
