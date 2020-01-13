import React from 'react';
import './style.css';
import ProductItem from './../ProductItem';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";



const ProductStore = (props) => {
    const {loading, isLoaded, food} = props;     

    // console.log(food);

    return(
        <div className='product-store'>
            <ul className='product-store__list'>
               {food.map( (item) => {
                   return(
                  <li style={{border: 'none'}} key={item.id}><ProductItem item={item} /></li> 
                   )
               })
            }
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.items.loading,
        food: state.items.food,
    };
};


const mapDispatchToProps = dispatch => {
    const { isLoaded, } = bindActionCreators(actions, dispatch);
    return {
      isLoaded,
    };
  };

  
export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);

