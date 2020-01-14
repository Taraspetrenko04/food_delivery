import React, {Component} from 'react';
import './style.css'

class ProductCard extends Component {
    render(){
        return(
            <div className='product__card'>
                <div className='product__card-box'>
                    <h1>TITLE</h1>
                    <div>redirect to home</div>
                    <div>Image</div>
                    <p>price</p>
                    <button>add to bascket</button>
                </div>
            </div>
        )
    }
}

export default ProductCard;