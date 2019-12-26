import React, { Component, Fragment } from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "../Header";
import Filter from "./../Filter";
import SideBar from "../SideBar";
import BackDrop from "../BackDrop/";
import Layout from '../Layout';
import ProductPage from '../ProductPage';
import Login from '../Login';
import Footer from '../Footer';
import "../../index.css";
// import Modal from '../Modal';

//
import { connect } from "react-redux"; //дает доступ к store
// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../storeTest/actionTest.js/index.js.js"; //импортируем все екшены(1) в bindActionCreator

class App extends Component {
  state = {
    isOpen: false
  };

  sideBarToggleHandler = () => {
    let prevstate = this.state.isOpen;
    this.setState(() => {
      return {
        isOpen: !prevstate
      };
    });
  };

  render() {
    let backdrop;

    if (this.state.isOpen) {
      backdrop = <BackDrop sideBarToggleHandler={this.sideBarToggleHandler} />;
    }

    return (
      <Fragment>
            {backdrop}
            <SideBar show={this.state.isOpen} />
            <Header sideBarToggleHandler={this.sideBarToggleHandler} />

            <Switch>
              <Route exact path="/" component={ props => <Layout> <Filter/> </Layout> }/>
              <Route exact path="/login" component={ Login }/>
              {/* <Filter /> */}
    
              {/* <ProductPage /> */}
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
