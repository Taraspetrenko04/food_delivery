import React from "react";
import './style.css';

 const UserLogged = (props) => {
    return(
        <div className='user__logged'>Hello {props.name}</div>
    )
}

export default UserLogged;