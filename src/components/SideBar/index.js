import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';



const SideBar = (props) => {
    // console.log(props.show);
    let sideBar = "side-bar__wrapper";
    if (props.show){
        sideBar = "side-bar__wrapper open"
    }
    return(
        <div className={ sideBar }>
            <ul className="side-bar__list">
                <li><Link  to="/login">login</Link></li>
                <li>logout</li>
            </ul>
        </div>
    )
}

export default SideBar;