import { useNavigate } from 'react-router-dom';
import '../main/Main.scss'
import './RightTopPanel.scss'
import search from "./../../materials/search.png"

function RightTopPanel() {
  var navigate = useNavigate();
  return (
    <div className='right-top-panel'>
      <img src={search} className="main-search" onClick={() => navigate("../search")}/>
      <div className='avatar-circle'>
        <div className="avatar-text">L</div>
      </div>
    </div>
  );
}

export default RightTopPanel;
