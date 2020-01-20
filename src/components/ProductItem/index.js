import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import AddToCard from './../AddToCard';

const ProductItem = (props) => {
    const { id, title, category, picture, price, } = props.item;
    const showProductCard = (event) => {
        if(event.target.className !== 'product-item__button'){
            props.history.push(`/products/${props.item.id}`)
        }
    };
    
    
    return(
        <div className='product-item' onClick={showProductCard}>
            <h2 className='product-item__title'>{title}</h2>
            <img alt={category} src={picture} className='product-item__picture'></img>
            <div className='product-item__wrapper'>
            <AddToCard id={id}/>
            <p className='product-item__price'>$ {price}</p>
            </div>
        </div>
    )
};

export default withRouter(ProductItem);
