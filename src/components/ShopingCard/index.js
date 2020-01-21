import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";



class ShoppingCard extends Component {
   

  render() {

   const { 
    onIncreasItem,
    onDecreasItem,
    onDeleteItem, 
    shoppingCard,
    food,
    history,
  } = this.props;
    

    const redirectHome = () => history.push(`/`);

    console.log(shoppingCard);
    console.log(food);
    
   const renderRow = (item, index,) => {
    const {id, title, price,} = item;
    return (
      <tr key={id}>
        <th className="shopping__card-table-cell">{index+1}</th>
        <th className="shopping__card-table-cell">{title}</th>
        <th className="shopping__card-table-cell">1</th>
        <th className="shopping__card-table-cell">{price}</th>
        <th className="shopping__card-table-cell">
          <i className="fas fa-plus-circle shopping__card-table-action" onClick={onIncreasItem}></i>
          <i className="fas fa-minus-circle shopping__card-table-action" onClick={onDecreasItem}></i>
          <i className="fas fa-trash-alt shopping__card-table-action" onClick={onDeleteItem}></i>
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
            Total: $
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
  }
}


const mapDispatchToProps = dispatch => {
  const {
    onIncreasItem,
    onDecreasItem,
    onDeleteItem 
    } = bindActionCreators(actions, dispatch);
  return {
    onIncreasItem: (id) => console.log("++++"),
    onDecreasItem: (id) => console.log("----"),
    onDeleteItem: (id) => console.log("DELETE"),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);


// export default ShoppingCard;
