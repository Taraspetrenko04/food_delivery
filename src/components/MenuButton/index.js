import React from "react";
import "./style.css";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login"; //импортируем все екшены(1) в bindActionCreator
// import { FontAwesomeIcon } from '../../../node_modules/react-fontawesome/lib/index.js'
// import { faCoffee } from '../../../node_modules/font-awesome/less/icons.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
 

const MenuButton = props => {
  return (
    <div className="menu-button" onClick={props.sidebarMobileOpen}>
      <FontAwesomeIcon icon={faBars} />
      {/* <i className="fas fa-bars"></i> */}
      
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
