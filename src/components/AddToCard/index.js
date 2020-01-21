import React from 'react';
import './style.css';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";

const AddToCard = (props) => {
    const {id, onAddedToCard} = props;  
    // const { onAddedToCard } = props;  


    const getId = (event) => {
      onAddedToCard( event.currentTarget.getAttribute('data-key') );
    }
    

    return (
        // <button id={id} className='product-item__button' type='button' onClick={getId}>Add to card</button>
        <button key={id} data-key={id} className='product-item__button' type='button' onClick={getId}>Add to card</button>
    )
};


const mapStateToProps = state => {
    return {
    //   shoppingCard: state.items.shoppingCard
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    const {onAddedToCard} = bindActionCreators(actions, dispatch);
    return {
        onAddedToCard
        // onAddedToCard: () => dispatch(onAddedToCard())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddToCard);
  
// export default AddToCard;
