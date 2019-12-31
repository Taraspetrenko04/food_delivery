import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login";

class Login extends Component {
  // const Login = (props) => {

  

  render() {
    let props = this.props

    const redirectHomePage = () =>{
        props.history.push('/');
    }

    return (
      <div className="login__page">
        <div className="login__page-modal">
          <p className="login__page-title">LOGIN PAGE</p>
          <form className="login__page-form">
            {/* <input className='login__page-input'
                    name="name"
                    type="text"
                    required
                    minLength="3"
                    maxLength="25"
                    placeholder="Name">
                    </input> */}
            <input
              className="login__page-input"
              name="email"
              type="email"
              required
              minLength="6"
              maxLength="25"
              placeholder="E-Mail"
            ></input>
            <input
              className="login__page-input"
              name="password"
              type="text"
              required
              minLength="6"
              maxLength="20"
              placeholder="Password"
            ></input>
            <button
              className="login__page-input"
              type="button"
              onClick={redirectHomePage}
            >
              LOGIN
            </button>
            <button className="login__page-input" type="button">
              <Link className="decor_none" to="/">
                CANCEL
              </Link>
            </button>
            <div className="login__page-input">Not registrated yet?</div>
            <div className="login__page-input">
              <Link to="/registration">Click to Registeration</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);