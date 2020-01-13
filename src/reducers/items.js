const initialState = {
  food: [
    {
      id: 1,
      title: "Pepsi",
      category: "drink",
      picture: "images/pepsi.png",
      price: 5
    },
    {
      id: 2,
      title: "Toscana",
      category: "pizza",
      picture: "images/toskana.jpg",
      price: 15
    },
    {
      id: 3,
      title: "Big Burger",
      category: "burger",
      picture: "images/bigMac.png",
      price: 10
    },
    {
      id: 4,
      title: "Chicken salad",
      category: "salad",
      picture: "images/chicken.png",
      price: 12
    },
    {
      id: 5,
      title: "Stella Artois",
      category: "drink",
      picture: "images/stellaartois.jpg",
      price: 6
    },
    {
      id: 6,
      title: "Gavai pizza",
      category: "pizza",
      picture: "images/gavai.jpg",
      price: 15
    },
    {
      id: 7,
      title: "Tasty Burger",
      category: "burger",
      picture: "images/bigTasty.png",
      price: 8
    },
    {
      id: 8,
      title: "Vegato salad",
      category: "salad",
      picture: "images/vegetable.png",
      price: 9
    }
  ],
  loading: false
};


const items = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOADED":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default items;
