import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login"; //импортируем все екшены(1) в bindActionCreator



const SideBar = props => {
  let sideBar = "side-bar__wrapper";
  if (props.isMobileOpen) {
    sideBar = "side-bar__wrapper open";
  }

  const logOut = () => {
    let x = () => (props.sidebarMobileClose());
    let y = () => (props.loggedOut());
    x();
    y();
  }
  let logged = null;
  if (!props.isLogged) {
    logged =  <li onClick={props.sidebarMobileClose}><Link to="/login">login</Link>
</li>
  }
  
  return (
    <div className={sideBar}>
      <ul className="side-bar__list">
        {logged}
        <li onClick={logOut}>logout</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isMobileOpen: state.login.isMobileOpen,
    isLogged: state.login.isLogged,
  };
};

const mapDispatchToProps = dispatch => {
  const { sidebarMobileClose, loggedOut, } = bindActionCreators(actions, dispatch);
  return {
    sidebarMobileClose,
    loggedOut,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
