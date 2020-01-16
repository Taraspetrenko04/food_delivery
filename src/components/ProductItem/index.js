import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import AddToCard from './../AddToCard';

const ProductItem = (props) => {
    const { title, category, picture, price, } = props.item;
    
    const showProductCard = (event) => {
        if(event.target.className !== 'product-item__button'){
            props.history.push(`/products/${props.item.id}`)
        }else{
            //action show cardlist  
            console.log('redirec to cardList');
        }
    };
    
    
    return(
        <div className='product-item' onClick={showProductCard}>
            <h2 className='product-item__title'>{title}</h2>
            <img alt={category} src={picture} className='product-item__picture'></img>
            <div className='product-item__wrapper'>
            <AddToCard />
            <p className='product-item__price'>$ {price}</p>
            </div>
        </div>
    )
};

export default withRouter(ProductItem);
