import '../main/Main.scss'
import './BottomPanel.scss'
import SongInBottomPanel from '../liked-songs/song/Song';

function BottomPanel(props: any) {
  return (
    <div className='bottom-panel-wrap'>
      <div className='bottom-panel'>
        { <SongInBottomPanel {...props}/> }
      </div>
    </div>
  );
}

export default BottomPanel;
