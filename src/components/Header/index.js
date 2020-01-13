import React, { Component } from 'react';
import './style.css';
import MenuButton from '../MenuButton'
import Logo from '../Logo';
import UserLogged from '../UserLogged';
// import Menu from './Menu';
// import Modal from '../Modal'

import { connect } from "react-redux"; //дает доступ к store
// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../actions"; //импортируем все екшены(1) в bindActionCreator 

class Header extends Component{
        // sideBarToggleHandler = this.props;
        render(){
            const {isLogged, userName} =this.props;
            let helloUser;
            
            if (isLogged){
                helloUser =  <UserLogged name={userName}/>
            }
        return(
            <div className='header__wrapper'>
                <MenuButton />
                <Logo />
               {helloUser}
                {/* <Logo />
                <Menu /> */}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      userName: state.login.userName,
    //   email: state.login.email,
    //   password: state.login.password,
    //   users: state.login.users,
    //   isValidName: state.login.isValidName,
    //   isValidEmail: state.login.isValidEmail,
    //   isValidPassword: state.login.isValidPassword,
      isLogged: state.login.isLogged,
    };
  };
//для связки connect and store нужно 2 функции mapStateToProps() mapDispatchToProps()
// const mapStateToProps = state => {
//     // console.log('mapStateToProps: '+ state.modal.isOpen);
//     return {
//       isOpen: state.modal
//     };
//   };
  
  export default connect(mapStateToProps, /*mapDispatchToProps*/)(Header); //коненкт оборачивает counter
// export default Header;