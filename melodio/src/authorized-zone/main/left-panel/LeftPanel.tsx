import { useNavigate } from 'react-router-dom';
import logo from './../../../materials/logo.png'
import './LeftPanel.scss';

export default function LeftPanel(props: any) {
    const navigate = useNavigate();
    
    let buttonsList = [
        { name: "Main page", navigatePath: "../main", buttonClassName: "deactive-button", divClassName: "deactive-div" },
        { name: "Liked songs", navigatePath: "../likedSongs", buttonClassName: "deactive-button", divClassName: "deactive-div"},
        { name: "Playlists", navigatePath: "../playlists", buttonClassName: "deactive-button", divClassName: "deactive-div"}
    ]

    if (props.activeButtonName != undefined) {
        let button = buttonsList[buttonsList.findIndex(buttonItem => buttonItem.name == props.activeButtonName)];
        button.buttonClassName = "active-button";
        button.divClassName = "active-div";
    }

    let buttons = buttonsList.map((buttonName) => {
        return (
          <div className={ buttonName.divClassName }>
            <button className={ buttonName.buttonClassName } onClick={
                () => navigate(buttonName.navigatePath)}>{ buttonName.name }</button>
          </div>
        )
    })

    return (
        <div className="left-panel">
          <img src={logo} className="main-logo" onClick={() => navigate("../main")}/>
          { buttons }
        </div>
    );
}
