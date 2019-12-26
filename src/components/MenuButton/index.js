import React from 'react'
import './style.css';

const MenuButton = (props) => {
    return(
        <div className='menu-button' onClick={props.click.sideBarToggleHandler}>
            <i className="fas fa-bars"></i>
        </div>
    )
}
export default MenuButton;


