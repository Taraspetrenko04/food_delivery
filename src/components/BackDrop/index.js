import React from 'react';
import './style.css';

const BackDrop = (props) => {
    return(
        <div className='back-drop__wrapper' onClick ={props.sideBarToggleHandler}>
        </div>
    )
}

export default BackDrop;