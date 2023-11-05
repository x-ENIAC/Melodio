import './Song.scss';
import '../../main/Main.scss'
import {useState} from 'react';
import nextSong from "./../../../materials/nextSong.png"
import previousSong from "./../../../materials/previousSong.png"
import play from "./../../../materials/play.png"
import playSongNotInBottom from './../../../materials/playSongNotInBottom.png'
import songIsLiked from './../../../materials/heartFilled.png'
import songIsNotLiked from './../../../materials/heartNotFilled.png'
import pauseInBottomPanel from './../../../materials/pauseInBottomPanel.png'
import pauseNotInBottomPanel from './../../../materials/pauseNotInBottomPanel.png'

class Song {
  id: number;
  name: string;
  author: string;
  duration: string;
  
  constructor(id: number, name: string, author: string, duration: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.duration = duration;
  }
}

// function GetLikedSongs(songs: Song[]) {
//   console.log(" HERE:", songs);
//   return songs.map((song) => {
//     return (
//       <div className='song'>
//         <div className='song-info'>
//           <div className='song-name'> { song.name } </div>
//           <div className='song-author'>Author { song.author } </div>
//         </div>
//         <div className='song-actions'>
//           <div className='song-box-for-items'>
//             <img src={previousSong} className="song-move-button"/>
//           </div>
//           <div className='song-box-for-items'>
//             <img src={play} className="song-play-button"/>
//           </div>
//           <div className='song-box-for-items'>
//             <img src={nextSong} className="song-move-button"/>
//           </div>
//         </div>
//         <div className='song-duration'>{song.duration}</div>
//       </div>
//     )
//   });
// }

// function SongInBottomPanel(songId: number, songName: string, songAuthor: string, songDuration: string) {
function SongInBottomPanel(song: Song) {
  return (
    <div className='song'>
      <div className='song-info'>
        <div className='song-name'> { song.name } </div>
        <div className='song-author'>Author { song.author } </div>
      </div>
      <div className='song-actions'>
        <div className='song-box-for-items'>
          <img src={previousSong} className="song-move-button"/>
        </div>
        <div className='song-box-for-items'>
          <img src={play} className="song-play-button"/>
        </div>
        <div className='song-box-for-items'>
          <img src={nextSong} className="song-move-button"/>
        </div>
      </div>
      <div className='song-duration'>{song.duration}</div>
    </div>
  );
}

function SongNotInBottomPanel(songId: number, songName: string, songAuthor: string, songDuration: string) {
  const [isLikedImage, setisLikedImage] = useState(true);

  const isLikedImageChangeHandler = () => {
    if(!isLikedImage) {
      setisLikedImage(true);
    } else {
      setisLikedImage(false)
    }
  };
  
  return (
    <div className='song-wrapper'>
      <div className='song'>
        <div className='song-info'>
          <div className='song-name'> { songName } </div>
          <div className='song-author'>Author { songAuthor } </div>
        </div>
        <div className='song-details'>
        <div className='song-box-for-items'>
            <img src={playSongNotInBottom} className='song-play-not-in-bottom-image'/>
          </div>
          <div className='song-is-liked-button'>
            <img src={!isLikedImage ? songIsNotLiked : songIsLiked} className='song-like-image' onClick={ isLikedImageChangeHandler }/>
          </div>
          <div className='song-duration'>{songDuration}</div>
        </div>
      </div>
    </div>
  )
}

function RenderSong(songId: number, songName: string, songAuthor: string, songDuration: string) {
  // if (isInBottomPanel == true) {
    // return SongInBottomPanel(songId, songName, songAuthor, songDuration, isInBottomPanel);
  // }
  // else {
    return SongNotInBottomPanel(songId, songName, songAuthor, songDuration);
  // }
}

export default SongInBottomPanel;
export { Song, SongNotInBottomPanel, SongInBottomPanel };