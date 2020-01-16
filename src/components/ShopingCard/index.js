import React, { Component } from "react";
import "./style.css";

class ShoppingCard extends Component {
  render() {
    return (
      <div className="shopping__card">
        <div className="shopping__card-store">
          <h2>shopping card</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
            <tr>
                <th>1</th>
                <th>Burger</th>
                <th>1</th>
                <th>10</th>
                <th>
                    <i className="fas fa-plus-circle"></i>
                    <i className="fas fa-minus-circle"></i>
                    <i className="fas fa-trash-alt"></i>
                </th>
              </tr>
            </tbody>

            {/* <tbody>
        { items.map(renderRow) }
        </tbody> */}
          </table>

          {/* <div className="total">
        Total: ${total}
      </div>
    </div> */}
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
