import React, { Component, Fragment } from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "../Header";
import SideBar from "../SideBar";
import BackDrop from "../BackDrop/";
import Layout from '../Layout';
import ProductCard from '../ProductCard';
import Login from '../Login';
import Registration from '../Registration';
import Footer from '../Footer';
import "../../index.css";

import { connect } from "react-redux"; //дает доступ к store

// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../storeTest/actionTest.js/index.js.js"; //импортируем все екшены(1) в bindActionCreator

class App extends Component {
  

  render() {
 

    return (
      <Fragment>
            <BackDrop />
            <SideBar />
            

            <Header />


            <Switch>
              {/* <Route exact path="/" component={ props => <Layout> <Filter/> </Layout> }/> */}
              <Route exact path="/" component={ Layout } />
              <Route exact path="/login" component={ Login }/>
              <Route exact path="/registration" component={ Registration }/>
              {/* <Route exact path="/products/1" component={ ProductCard }/> */}


              <Route exact path="/products/:id" 
                  render={ ( {match, history} ) =>{
                    const id = match.params.id
                    return <ProductCard  productId={id} /> 
                  } } 
              />


              {/* <Route path="*" component={NotFound}/> */}
            </Switch>


            <Footer />

            
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps');
  return {
    state: state
  };
};

export default connect(mapStateToProps /*mapDispatchToProps*/)(App); //коненкт оборачивает counter
