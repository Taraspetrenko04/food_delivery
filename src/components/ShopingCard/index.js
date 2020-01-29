import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";



class ShoppingCard extends Component {
   

  render() {

   const { 
    onAddedToCard,
    // onIncreasItem,
    onDecreasItem,
    onDeleteItem, 
    shoppingCard,
    // food,
    history,
    orderTotal,
  } = this.props;
    

    const redirectHome = () => history.push(`/`);


    
   const renderRow = (item, index,) => {
    const {id, title, count, total,} = item;
    return (
      <tr  key={id}>
        <th className="shopping__card-table-cell">{index+1}</th>
        <th className="shopping__card-table-cell">  {title}</th>
        <th className="shopping__card-table-cell">{count}</th>
        <th className="shopping__card-table-cell">$ {total}</th>
        <th className="shopping__card-table-cell">
          <i className="fas fa-plus-circle shopping__card-table-action plus" onClick={() => onAddedToCard(id)}></i>
          <i className="fas fa-minus-circle shopping__card-table-action minus" onClick={() => onDecreasItem(id)}></i>
          <i className="fas fa-trash-alt shopping__card-table-action delete" onClick={() => onDeleteItem(id)}></i>
        </th>
      </tr>
    );
  }


    return (
      <div className="shopping__card">
        <div className="shopping__card-store">
          <h2 className="shopping__card-title">shopping card</h2>
          <table className="shopping__card-table">
            <thead>
              <tr className="shopping__card-table-row">
                <th className="shopping__card-table-cell">№</th>
                <th className="shopping__card-table-cell">Item</th>
                <th className="shopping__card-table-cell">Count</th>
                <th className="shopping__card-table-cell">Total</th>
                <th className="shopping__card-table-cell">Actions</th>
              </tr>
            </thead>

            <tbody>
              {shoppingCard.map(renderRow)}
              {/* <RenderRow /> */}
            </tbody>
          </table>

          <div className="total">
            Order Total: $ {orderTotal}
          </div>

          <button type="button" >
            GET ORDER
          </button>
          <button type="button" onClick={redirectHome}>
            BACK
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    shoppingCard: state.items.shoppingCard,
    food: state.items.food,
    orderTotal: state.items.orderTotal,
  }
}


const mapDispatchToProps = dispatch => {
  const {
    onAddedToCard,
    // onIncreasItem,
    onDecreasItem,
    onDeleteItem 
    } = bindActionCreators(actions, dispatch);
  return {
    onAddedToCard,
    // onIncreasItem,
    onDecreasItem,
    onDeleteItem,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);


// export default ShoppingCard;
