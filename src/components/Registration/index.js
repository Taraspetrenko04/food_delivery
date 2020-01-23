import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login.js";
import Spinner from "../Spinner";

class Registration extends Component {

  timer = null;

  componentDidMount() { // get data from localStr & set it to State
    const { 
      setUsersList,
      setEmail,
      setPassword,
      isNameValidTrue,
      isEmailValidTrue,
      isPasswordValidTrue,
      setMessage,
     } = this.props;
    

    isNameValidTrue();
    isEmailValidTrue();
    isPasswordValidTrue();
    setMessage('');
    setEmail('');
    setPassword('');
    let usersList = JSON.parse(localStorage.getItem("users"));
    if (usersList) {
      setUsersList(usersList);
    }
  }


  componentWillUnmount(){
    const {isLoadingTrue,
      isLoadingFalse,} = this.props;
      isLoadingFalse();
      clearTimeout(this.timer);
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
      history,//for links
      // isLogged,

      isValidName, //State
      isValidEmail,
      isValidPassword,

      // isNameValid,//actions
      isNameValidTrue,
      isNameValidFalse,
      isEmailValidTrue,
      isEmailValidFalse,
      isPasswordValidTrue,
      isPasswordValidFalse,
      loggedIn,
      loading,
      isLoadingTrue,
      isLoadingFalse,
      setMessage,
      message,
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
        email: email,
        password: password
      };
    };

    const updateLocalStor = newUsersList => {
      localStorage.setItem("users", JSON.stringify(newUsersList));
    };

    const addNewUser = () => {
      let user = createNewUser();
      let [...rest] = users;
      let newUsersList = [...rest, user];
      updateLocalStor(newUsersList);
      return setUsersList(newUsersList);
    };


    const redirectHomePage = () => {
      isLoadingTrue();
      this.timer = setTimeout( () => history.push("/"), 1300);
    };


    const redirectLoginPage = () => {
      isLoadingTrue();
      this.timer = setTimeout( () => history.push("/login"), 1300);
    };


    const isMailExist = () => {
      let user = users.filter(user => user.email === email);
      if (user.length > 0) {
        return true;
      } else {
        return false;
      }
    };

    const isInputValid = () => {
      let n, e, p;
      let nameCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      let emailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      let passwordCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;

      
      if (nameCheck.test(userName)) {
        isNameValidTrue();
        n = true;
      } else {
        isNameValidFalse();
      }
      if (emailCheck.test(email)) {
        isEmailValidTrue();
        e = true;
      } else {
        isEmailValidFalse();
      }
      if (passwordCheck.test(password)) {
        isPasswordValidTrue();
        p = true;
      } else {
        isPasswordValidFalse();
      }

      if (n === true && e === true && p === true) {
        return true;
      }
    };


    let wrongName = "";
    let wrongEmail = "";
    let wrongPassword = "";
    let emailExist = "";
    let spinner = "";
    let classForm = "";
    

    const RegistrSubmit = () => {
      if (isInputValid()) {
        if (isMailExist()) {
          setMessage('This E-mail already exist, just log-in plese');
          redirectLoginPage();
        }else{
          addNewUser();
          loggedIn();
          setMessage('You have succesfully registrated');
          redirectHomePage();
        }
      }
    };

   

    if (!isValidName) {
      wrongName = <p className="login__page-invalid">Name is not valid</p>;
    }
    if (!isValidEmail) {
      wrongEmail = <p className="login__page-invalid">Email is not valid</p>;
    }
    if (!isValidPassword) {
      wrongPassword = 
        <p className="login__page-invalid">Password is not valid</p>
    }


    spinner = loading ? <Spinner /> : null;
    classForm = !loading ? "login__page-form" : "login__page-form hide";


    return (
      <div className="login__page">
        <div className="login__page-modal">
        <p className="login__page-title message">{message}</p>
          {spinner}
        
          <form className={classForm}>
          <p className="login__page-title">Registration PAGE</p>
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
            {wrongName}
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
            {wrongEmail}
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
            {wrongPassword}
            <button
              className="login__page-input"
              type="button"
              onClick={RegistrSubmit}
            >
              Registration
            </button>
            <button className="login__page-input" type="button" onClick={redirectHomePage}>
              {/* <Link className="decor_none" to="/"> */}
                CANCEL
              {/* </Link> */}
            </button>
            <div className="login__page-input">Already registrated?</div>
            <div className="login__page-input underline" onClick={redirectLoginPage}>
              {/* <Link to="/login">Click to Login</Link> */}
              Click to Login
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
    isValidPassword: state.login.isValidPassword,
    isLogged: state.login.isLogged,
    loading: state.login.loading,
    message: state.login.message,
  };
};

const mapDispatchToProps = dispatch => {
  const {
    setName,
    setEmail,
    setPassword,
    setUsersList,
    isNameValidTrue,
    isNameValidFalse,
    isEmailValidTrue,
    isEmailValidFalse,
    isPasswordValidTrue,
    isPasswordValidFalse,
    loggedIn,
    setMessage,
    isLoadingTrue,
    isLoadingFalse,
  } = bindActionCreators(actions, dispatch);

  return {
    setName,
    setEmail,
    setPassword,
    setUsersList,

    isNameValidTrue,
    isNameValidFalse,

    isEmailValidTrue,
    isEmailValidFalse,

    isPasswordValidTrue,
    isPasswordValidFalse,

    loggedIn,
    setMessage,
    isLoadingTrue,
    isLoadingFalse
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

