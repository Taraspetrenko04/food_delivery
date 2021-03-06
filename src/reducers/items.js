 const initialState = {
  food: [
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
    {
      id: 4,
      title: "Chicken salad",
      category: "salad",
      picture: "/images/chicken.png",
      price: 12
    },
    {
      id: 5,
      title: "Stella Artois",
      category: "drink",
      picture: "/images/stellaartois.jpg",
      price: 6
    },
    {
      id: 6,
      title: "Gavai pizza",
      category: "pizza",
      picture: "/images/gavai.jpg",
      price: 15
    },
    {
      id: 7,
      title: "Tasty Burger",
      category: "burger",
      picture: "/images/bigTasty.png",
      price: 8
    },
    {
      id: 8,
      title: "Vegato salad",
      category: "salad",
      picture: "/images/vegetable.png",
      price: 9
    }
  ],
  loading: false,
  shoppingCard: [],
  orderTotal: 0
};

const updateOrderTotal = (shoppingCard) => {
  let newOrderTotal = shoppingCard.reduce( (prev, item) => prev + item.total, 0)
  return newOrderTotal;
} 


const updateShoppingCard = (shoppingCard, newItem, index) => {
  if (newItem.count === 0) {
    return [...shoppingCard.slice(0, index), 
      ...shoppingCard.slice(index + 1)];
  }


  if (index === -1) {
    return [...shoppingCard, newItem];
  }


  return [
    ...shoppingCard.slice(0, index),
    newItem,
    ...shoppingCard.slice(index + 1)
  ];
};

const updateCartItem = (selectedItem, item = {}, quantity) => {
  const {
    id = selectedItem.id,
    count = 0,
    title = selectedItem.title,
    total = 0
  } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + selectedItem.price * quantity
  };
};

const updateOrder = (state, id, quantity) => {
  const { food, shoppingCard, orderTotal = 0 } = state;
  const selectedId = id;
  const selectedItem = food.find(item => item.id === +selectedId);
  const index = shoppingCard.findIndex(item => item.id === selectedItem.id);
  const item = shoppingCard[index];


  const newItem = updateCartItem(selectedItem, item, quantity);
  const newShoppingCard = updateShoppingCard(shoppingCard, newItem, index);
  const newOrderTotal = updateOrderTotal(newShoppingCard); 
 

  return {
    ...state,
    shoppingCard: newShoppingCard,
    orderTotal: newOrderTotal,
  };
};



const items = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOADED_FALSE":
      return {
        ...state,
        loading: false
      };

    case "IS_LOADED":
      return {
        ...state,
        loading: true
      };

    case "SET_BY_CATEGORY":
      const category = action.payload;
      const newFoodList = initialState.food.filter(elem => {
        return elem.category === category;
      });
      return {
        ...state,
        food: newFoodList
      };

    case "SHOW_ALL_CATEGORIES":
      if (state.food.length !== initialState.food.length) {
        return {
          ...state,
          food: initialState.food
        };
      }

    case "ON_ADDED_TO_CARD":
      if (action.payload) {
        return updateOrder(state, action.payload, +1);
      }

    case "ON_DECREASE_ITEM":
      if (action.payload) {
        return updateOrder(state, action.payload, -1);
      }

    case "ON_DELETE_ITEM":
      if (action.payload) {
        const item = state.shoppingCard.find(
          item => item.id === action.payload
        );
        return updateOrder(state, action.payload, -item.count);
      }
    

    default:
      return state;
  }
};

export default items;
