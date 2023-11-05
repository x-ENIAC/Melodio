import '../main/Main.scss'
import './BottomPanel.scss'
import { useNavigate } from "react-router-dom";
import SongInBottomPanel from '../liked-songs/song/Song';

function BottomPanel(props: any) {
  const navigate = useNavigate();
  console.log(props);

  return (
    <div className='bottom-panel-wrap'>
      <div className='bottom-panel'>
        { SongInBottomPanel(props.getPlayingSong()) }
        {/* { RenderSong(0, "Never gonna give you up", "Rick Astley", "3:32") } */}
      </div>
    </div>
  );
}

export default BottomPanel;
