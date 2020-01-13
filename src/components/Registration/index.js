import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login.js";
// import Spinner from "../Spinner";

class Registration extends Component {


  componentDidMount() { // get data from localStr & set it to State
    const { setUsersList, setEmail, setPassword,isNameValidTrue, isEmailValidTrue, isPasswordValidTrue } = this.props;
    isNameValidTrue();
    isEmailValidTrue();
    isPasswordValidTrue();
    
    setEmail('');
    setPassword('');
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
      loggedIn
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
      history.push("/");
    };
    const redirectLoginPage = () => {
      history.push("/login");
    };

    const isMailExist = () => {
      let user = users.filter(user => user.email === email);
      // console.log(user);
      if (user.length > 0) {
        // alert("mail already exist");
        return true;
      } else {
        // alert("mail DOES NOT exist");
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
    // let loginSucses = "";
    let emailExist = "";
    
    const RegistrSubmit = () => {
      if (isInputValid()) {
        if (isMailExist()) {
          alert('email already exist, login');
          redirectLoginPage();
        }else{
          addNewUser();
          loggedIn();
          setTimeout(redirectHomePage, 1500)
        }
        //проверка на наличчие имейла
        //или редирект на login или

        //добавление юзера
        //вход и редирект на / 
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

    return (
      <div className="login__page">
        <div className="login__page-modal">
          <p className="login__page-title">Registration PAGE</p>
          {emailExist}

          {/* <div className='spinner-container'>
          <div>E-Mail already exist</div>
          <Spinner />
          </div> */}

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
    isValidPassword: state.login.isValidPassword,
    isLogged: state.login.isLogged,
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

    loggedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

