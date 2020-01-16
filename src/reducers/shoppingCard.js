
const initialState = {
    order: [],
    quantity: 0, //order.length
    visible: false,
    totalPrice: 0
  };
  
  
  const shoppingCard = (state = initialState, action) => {
    switch (action.type) {


      case "IS_SHOPPING_CARD_OPEN":
        return {
          ...state,
          visible: true,
        };
  
  
      default:
        return state;
    }
  };
  
  export default shoppingCard;