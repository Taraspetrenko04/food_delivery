
const initialState = {
    order: [
      {
        id: 1,
        title: "Pepsi",
        category: "drink",
        picture: "/images/pepsi.png",
        price: 5
      },
      {
        id: 2,
        title: "Toscana",
        category: "pizza",
        picture: "/images/toskana.jpg",
        price: 15
      },
      {
        id: 3,
        title: "Big Burger",
        category: "burger",
        picture: "/images/bigMac.png",
        price: 10
      },
    ],
    quantity: 0, //order.length
    visible: false,
    totalPrice: 30
  };
  
  
  const shoppingCard = (state = initialState, action) => {
    switch (action.type) {


      case "IS_SHOPPING_CARD_OPEN":
        // console.log('reducer')
        return {
          ...state,
          visible: true,
        };
  
  
      default:
        return state;
    }
  };
  
  export default shoppingCard;