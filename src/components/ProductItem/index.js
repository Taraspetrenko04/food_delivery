import React from 'react';
import './style.css'

const ProductItem = (props) => {
    // console.log(props);
    const { title, category, description, picture, price} = props.item;
    // console.log(picture)
    return(
        <div className='product-item'>
            <h2 className='product-item__title'>{title}</h2>
            <img alt={category} src={picture} className='product-item__picture'></img>
            <div className='product-item__wrapper'>
            <p className='product-item__price'>$ {price}</p>
            {/* set function add to buskey onclick */}
            <button className='product-item__button' type='button'>Add to basket</button>
            </div>
           
        </div>
    )
};

export default ProductItem;
