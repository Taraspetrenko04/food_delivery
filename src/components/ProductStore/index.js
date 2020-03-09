import React from 'react';
import './style.css';
import ProductItem from './../ProductItem';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions";



const ProductStore = (props) => {
  const { food, /*cardLoaded, history*/ } = props;
  return (
    <div className='product-store'>
      <ul className='product-store__list'>
        {food.map((item) => {
          return (
            <li style={{ border: 'none' }} key={item.id}><ProductItem item={item} /></li>
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
  const { isLoaded, isCardLoaded } = bindActionCreators(actions, dispatch);
  return {
    isLoaded,
    isCardLoaded,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);

