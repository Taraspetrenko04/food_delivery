import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login.js";

class Registration extends Component {


  componentDidMount() {
    // get data from localStr & set it to Reducer
    const { setUsersList } = this.props;
    let usersList = JSON.parse(localStorage.getItem("users"));
    if (usersList) {
      setUsersList(usersList);
    }
  }


  render() {
    const {
      userName,
      email,
      password,
      users,
      setName,
      setEmail,
      setPassword,
      setUsersList,
      history,

      isValidName,
      isValidEmail,
      isValidPassword,

      isNameValid,
      isEmailValid,

    } = this.props;


    const setUserName = event => {
      setName(event.target.value);
    };

    const setUserEmail = event => {
      setEmail(event.target.value);
    };


    const setUserPassword = event => {
      setPassword(event.target.value);
    };


    const createNewUser = () => {
      return {
        name: userName,
        email:  email,
        password: password,
      };
    };

    const addNewUser = () => {
      let user = createNewUser();
      let [...rest] = users;
      let newUsersList = [...rest, user];
      updateLocalStor(newUsersList);
      return setUsersList(newUsersList);
    };


    const updateLocalStor = newUsersList => {
      localStorage.setItem("users", JSON.stringify(newUsersList));
    };


    const redirectHomePage = () => { history.push('/') };
    const redirectLoginPage = () => { history.push('/login') };


    const RegistrSubmit = () => {
      isEmailValid();
      console.log(isValidEmail)
      // addNewUser();
      // setTimeout(redirectHomePage, 2000)
    }

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
              onChange={setUserName}
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
              onChange={setUserEmail}
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
              onChange={setUserPassword}
            ></input>
            <p>{password}</p>
            <button className="login__page-input" type="button" onClick={RegistrSubmit}>
              Registration
            </button>
            <button className="login__page-input" type="button">
              <Link className="decor_none" to="/">
                CANCEL
              </Link>
            </button>
            <div className="login__page-input">Already registrated?</div>
            <div className="login__page-input">
              <Link to="/login">Click to Login</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.login.userName,
    email: state.login.email,
    password: state.login.password,
    users: state.login.users,
    isValidName: state.login.isValidName,
    isValidEmail: state.login.isValidEmail,
  };
};

const mapDispatchToProps = dispatch => {
  const { setName, setEmail, setPassword, setUsersList, isNameValid,isEmailValid } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    setName,
    setEmail,
    setPassword,
    setUsersList,
    isNameValid,
    isEmailValid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
