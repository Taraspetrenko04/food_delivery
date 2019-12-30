import React, { Component } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login.js";


class Registration extends Component {
// const Registration = ({userName, email, password,
//        setName, setEmail, setPassword, users}) => {
  // const { userName, email, password,
  //   setName, setEmail, setPassword, users } = this.props;

        componentDidMount() {
          // get data from localStr & set it to State
          const { setUsersList } = this.props;
          let usersList = JSON.parse(localStorage.getItem("users"));
          if (usersList) {
            setUsersList(usersList);
          }
        }

  

  // setUserName = (event) =>{
  //   setName(event.target.value);
  // }

  // setUserEmail = (event) =>{
  //   setEmail(event.target.value);
  // }


  // setUserPassword = (event) =>{
  //   setPassword(event.target.value);
  // }


  // createNewUser = () => {
  //   return {
  //     name: userName,
  //     mail:  email,
  //     password: password,
  //   };
  // };

  
  render(){
    const { userName, email, password,} = this.props;
  return (
    <div className="login__page">
      <div className="login__page-modal">
        <p className="login__page-title">Registration PAGE</p>
        <form className="login__page-form">
          <input
            className="login__page-input"
            name="name"
            type="text"
            required
            minLength="3"
            maxLength="25"
            placeholder="Name"
            // onChange={setUserName}
          ></input>
          <p>{userName}</p>
          <input
            className="login__page-input"
            name="email"
            type="email"
            required
            minLength="6"
            maxLength="25"
            placeholder="E-Mail"
            // onChange={setUserEmail}
          ></input>
          <p>{email}</p>
          <input
            className="login__page-input"
            name="password"
            type="text"
            required
            minLength="6"
            maxLength="20"
            placeholder="Password"
            // onChange={setUserPassword}
          ></input>
          <p>{password}</p>
          <button className="login__page-input" type="button">
            Registration
          </button>
          <button className="login__page-input" type="button">
            <Link className="decor_none" to="/">
              CANCEL
            </Link>
          </button>
          <div className="login__page-input">Already registrated?</div>
          <div className="login__page-input">
            <Link to="/login">LOGIN</Link>
          </div>
        </form>
      </div>
    </div>
  );
  }
};


const mapStateToProps = (state) => {
  return {
    userName: state.login.userName,
    email: state.login.email,
    password: state.login.password,
    users: state.login.users,
  };
};


const mapDispatchToProps = dispatch => {
  const { setName, setEmail, setPassword, setUsersList } = bindActionCreators(actions, dispatch);
  return {
      setName,
      setEmail,
      setPassword,
      setUsersList,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Registration);

