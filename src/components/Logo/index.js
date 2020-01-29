import React from 'react';
import './style.css';
import { Link } from "react-router-dom";


const Logo = () => {
    return(
        <div className="logo__wraper">
            <p alt="food-delivery"><Link to="/" className='logo__text'>food delivery</Link></p>
        </div>
    )
}


export default Logo;