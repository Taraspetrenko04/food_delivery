import React from "react";
import "./style.css";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login"; //импортируем все екшены(1) в bindActionCreator

// sidebarMobileHandler
const MenuButton = props => {
  return (
    // <div className='menu-button' onClick={props.click.sideBarToggleHandler}>
    <div className="menu-button" onClick={props.sidebarMobileOpen}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isMobileOpen: state.login.isMobileOpen
  };
};

const mapDispatchToProps = dispatch => {
  const { sidebarMobileOpen } = bindActionCreators(actions, dispatch);
  return {
    sidebarMobileOpen
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
