import React, { Component, Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/login";
import Spinner from "../Spinner";

class Login extends Component {

    timer = null;

    componentDidMount() { // get data from localStr & set it to State
      const { setUsersList,
        isEmailValidTrue,
        isPasswordValidTrue,
        setEmail,
        setPassword,setMessage
       } = this.props;


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
      // userName,
      email,
      password,
      users,
      setName,
      setEmail,
      setPassword,
      loading,
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
      isLoadingTrue,
      loggedIn,
      setMessage,
      message,
    } = this.props;


   


    const redirectHomePage = () => {
      isLoadingTrue();
      this.timer = setTimeout( () => 
      history.push("/")
      , 1300 )
    };


    const redirectRegistrationPage = () => {
      isLoadingTrue();
      this.timer = setTimeout( () => 
      history.push("/registration")
      , 1300 )
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
      if (user.length > 0) {
        return true;
      } else {
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
    let spinner = "";
    let classForm = "";


    const loginSubmit = () => {


      if ( isInputValid() ){
        // console.log('valid');


        if( isMailExist() ) {


            if ( isPasswordCorrect() ){
              //set userName
              loggedIn();//set logget true
              setMessage("Access allowed :)");
              redirectHomePage();//redirect to home page
              
              return 
            }else{
                //set state inValid pasword
                isPasswordValidFalse();
            }


        }
        else{
          ///mesageCreator
          setMessage("You are not registrated yet, SingUp please");
          redirectRegistrationPage();
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


    spinner = loading ? <Spinner /> : null;
    classForm = !loading ? "login__page-form" : "login__page-form hide";
    

    return (
      <div className="login__page">
        <div className="login__page-modal">
          
        <p className="login__page-title message">{message}</p>
          {spinner}
          
          
          <form className={classForm}>
          <p className="login__page-title">LOGIN PAGE</p>
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
              CANCEL
            </button>
            <div className="login__page-input">Not registrated yet?</div>
            <div className="login__page-input underline" onClick={redirectRegistrationPage}>
              Click to Registeration
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
    loading: state.login.loading,
    message: state.login.message
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
          loggedIn,
          isLoadingTrue,
          isLoadingFalse,
          setMessage,
        }  = bindActionCreators(actions, dispatch);
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

    loggedIn,

    isLoadingTrue,
    isLoadingFalse,
    setMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


