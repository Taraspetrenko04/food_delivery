import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


const Logo = () => {
    return(
        <div className="logo__wraper">
            <h1 alt="food-delivery"><Link to="/" className='logo__text'>food delivery</Link></h1>
        </div>
    )
}


export default Logo;