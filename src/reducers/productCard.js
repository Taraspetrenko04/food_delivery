import ProductCard from "../components/ProductCard";

const initialState = {
    cardLoaded: false
  };
  
  
  const productCard = (state = initialState, action) => {
    switch (action.type) {


      case "IS_CARD_LOADED":
        return {
          ...state,
          cardLoaded: true,
        };
  
  
      default:
        return state;
    }
  };
  
  export default productCard;