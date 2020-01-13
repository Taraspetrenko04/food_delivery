import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login";

class Login extends Component {
  

    componentDidMount() { // get data from localStr & set it to State
      const { setUsersList,
        isEmailValidTrue,
        isPasswordValidTrue,
        setEmail,
        setPassword } = this.props;
        isEmailValidTrue();
        isPasswordValidTrue();

      setEmail('');
      setPassword('');

      // isEmailValidFalse();
      // isPasswordValidFalse();//use component willUnmount;
      let usersList = JSON.parse(localStorage.getItem("users"));
      if (usersList) {
        setUsersList(usersList);
      }
    }


  render() {
    const {
      // userName,
      email,
      password,
      users,
      setName,
      setEmail,
      setPassword,
      // setUsersList,
      history,//for links
      // isLogged,

      // isValidName, //State
      isValidEmail,
      isValidPassword,

      // isNameValid,//actions
      // isNameValidTrue,
      // isNameValidFalse,
      isEmailValidTrue,
      isEmailValidFalse,
      isPasswordValidTrue,
      isPasswordValidFalse,
      loggedIn
    } = this.props;


    const redirectHomePage = () => {
      history.push("/");
    };

    const redirectRegistrationPage = () => {
      history.push("/registration");
    };


    const setUserEmail = event => {
      setEmail(event.target.value);
    };

    const setUserPassword = event => {
      setPassword(event.target.value);
    };


    const setUserName = (name) => {
      setName(name);
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


    const isPasswordCorrect = () => {
      let user = users.filter(user => user.email === email);
      if ( user[0].password === password){
        setUserName(user[0].name); // set userName
        return true;
      }
      return false;
    }


    const isInputValid = () => {
      let e, p;
      let emailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      let passwordCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      

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

      if (e === true && p === true) {
        return true;
      }
    };


    let wrongEmail = "";
    let wrongPassword = "";


    const loginSubmit = () => {

      if ( isInputValid() ){
        // console.log('valid');


        if( isMailExist() ) {
            //  console.log('email exits')


            if ( isPasswordCorrect() ){
              //set userName
              loggedIn();//set logget true
              redirectHomePage();//redirect to home page
              alert('passsword corrcet');
              return 
            }else{
                //set state inValid pasword
                return alert('passsword INCORRECT');
            }


        }
        else{
          alert(`Registr please`);
          redirectRegistrationPage()
        }


      }else{
        return;
      }

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
          <p className="login__page-title">LOGIN PAGE</p>
          <form className="login__page-form">
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
              onClick={loginSubmit}
            >
              LOGIN
            </button>
            <button
              className="login__page-input"
              type="button"
              onClick={redirectHomePage}
            >
              {/* <Link className="decor_none" to="/"> */}
              CANCEL
              {/* </Link> */}
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
    isMobileOpen: state.login.isMobileOpen,
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
  const { sidebarMobileClose,
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
          loggedIn, } = bindActionCreators(actions, dispatch);
  return {
    sidebarMobileClose,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
