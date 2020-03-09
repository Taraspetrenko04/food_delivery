import React, { Component, Fragment } from "react";
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import BackDrop from "../BackDrop/";
import Layout from '../Layout';
import ProductCard from '../ProductCard';
import Login from '../Login';
import Registration from '../Registration';
import Footer from '../Footer';
import "../../index.css";
import ShoppingCard from "../ShopingCard";
import 'font-awesome/css/font-awesome.css';
// import { FontAwesome } from 'react-fontawesome';

import { connect } from "react-redux"; //дает доступ к store

// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../storeTest/actionTest.js/index.js.js"; //импортируем все екшены(1) в bindActionCreator

class App extends Component {
  render() {
    return (
      <div>
            <BackDrop />
            <SideBar />
            <Header />
            <Switch>
              <Route exact path="/" component={ Layout } />
              <Route path="/login" component={ Login }/>
              <Route path="/registration" component={ Registration }/>
              <Route path="/shopping-card" component={ ShoppingCard}/>
              <Route path="/products/:id" 
                  render={ ( {match, history} ) =>{
                    const id = match.params.id
                    return <ProductCard  productId={id} /> 
                  } } 
              />
            </Switch>
            <Footer />         
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(mapStateToProps /*mapDispatchToProps*/)(App); //коненкт оборачивает counter
