import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login"; //импортируем все екшены(1) в bindActionCreator



const SideBar = (props) => {
    let sideBar = "side-bar__wrapper";
    if (props.isMobileOpen){
        sideBar = "side-bar__wrapper open"
    }
    return(
        <div className={ sideBar }>
            <ul className="side-bar__list">
                <li onClick={props.sidebarMobileClose}><Link  to="/login">login</Link></li>
                <li>logout</li>
            </ul>
        </div>
    )
}


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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
