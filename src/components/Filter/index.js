import React from 'react'
import './style.css';

const Filter = () => {
    return(
        <div className='filter-wrapper'>
            <ul>
                <li><i className="fas fa-wine-bottle"></i></li>
                <li><i className="fas fa-pizza-slice"></i></li>
                <li><i className="fas fa-hamburger"></i></li>
                <li><i className="fas fa-leaf"></i></li>
            </ul>
        </div>
    )
}

export default Filter;