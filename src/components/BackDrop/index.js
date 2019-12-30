import React from "react";
import "./style.css";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login"; //импортируем все екшены(1) в bindActionCreator

const BackDrop = props => {
  let classShow = "back-drop__wrapper";

  if (props.isMobileOpen) {
    classShow = "back-drop__wrapper open";
  }
  return <div className={classShow} onClick={props.sidebarMobileClose}></div>;
};

const mapStateToProps = state => {
  return {
    isMobileOpen: state.login.isMobileOpen
  };
};

const mapDispatchToProps = dispatch => {
  const { sidebarMobileClose } = bindActionCreators(actions, dispatch);
  return {
    sidebarMobileClose
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
