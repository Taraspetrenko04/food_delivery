import React, { Component, /*useEffect*/ } from "react";
import "./style.css";
import { withRouter } from "react-router-dom"; //high order component
import { connect } from "react-redux"; //get access to store
import AddToCard from "./../AddToCard";
import Spinner from "./../Spinner";
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";

class ProductCard extends Component {
// const ProductCard = props => {
  // componentDidMount() {
  //     const {isLoaded} = this.props;
  // }


  timer = null;
  
  componentDidMount() {
    const {isLoaded, } = this.props;
    this.timer = setTimeout(() => {
        // console.log('Hello, World!')
        isLoaded()}
        , 1600)
  }
  

  componentWillUnmount() {
    const {isLoadedFalse, } = this.props;
    clearTimeout(this.timer);
    isLoadedFalse();
  }


  render(){
  const { productId, food, history, /*isLoaded,*/ loading, /*isLoadedFalse*/ } = this.props;
//   const { productId, food, history, isLoaded, loading } = props;
  const currentPoduct = food.find(elem => elem.id === +productId);
  const { title, price, picture } = currentPoduct;
  const redirectHome = () => history.push(`/`);


//   settimeout for function
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       isLoaded();
//       console.log("Timeout called!");
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

  // settimeout for class
  //

  let spinner = !loading ? <Spinner /> : null;
  let image = loading ? (
    <img className="product__card-img" alt={title} src={picture}></img>
  ) : null;

  return (
    <div className="product__card">
      <div className="product__card-box">
        <h1 className="product__card-title">{title}</h1>
        <div>
          {spinner}
          {image}
        </div>
        {/* <img className='product__card-img' alt={title} src={picture}></img> */}
        <p className="product__card-price"> $ {price}</p>
        <div className="product__card-btn-wrapper">
          <AddToCard />
          <button
            className="product__card-btn"
            type="button"
            onClick={redirectHome}
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
  }
  }

const mapStateToProps = state => {
  return {
    food: state.items.food,
    loading: state.items.loading
  };
};

const mapDispatchToProps = dispatch => {
  const { isLoaded, isLoadedFalse } = bindActionCreators(actions, dispatch);
  return {
    isLoaded,
    isLoadedFalse
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductCard)
);
// export default ProductCard;
