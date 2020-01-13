import React from 'react';
import './style.css';
import Filter from './../Filter';
import ProductStore from './../ProductStore';


const Layout = () => {
    return(
        <div className='layout'>
            <Filter />
            <ProductStore />
        </div>
    )
}

export default Layout;