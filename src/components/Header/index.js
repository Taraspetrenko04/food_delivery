import React, { Component } from 'react';
import './style.css';
import MenuButton from '../MenuButton'
import Logo from '../Logo';
import UserLogged from '../UserLogged';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux";//bind action && dispatch
import * as actions from "../../actions/items"; //импортируем все екшены(1) в bindActionCreator 

class Header extends Component{


        render(){
          const { history, orderTotal } = this.props;
          const goToProductCard = () => history.push(`/shopping-card`);


            const {isLogged, userName, showAllCategories} =this.props;
            let helloUser;
            
            if (isLogged){
                helloUser =  <UserLogged name={userName}/>
            }

            
        return(
            <div className='header__wrapper' onClick={() => showAllCategories()}>
                <MenuButton />
                <Logo />
               {helloUser}


               <div className='header__card' onClick={goToProductCard}>
                 <i className="fas fa-shopping-basket header__card-text"></i>
                <p className="header__card-text">${orderTotal}</p>
               </div>


            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      userName: state.login.userName,
      isLogged: state.login.isLogged,
      orderTotal: state.items.orderTotal
    };
  };


  const mapDispatchToProps = dispatch => {
    const { showAllCategories, } = bindActionCreators(actions, dispatch);
    return {
      showAllCategories,
    };
  };

  
  export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Header) ); //коненкт оборачивает counter
// export default Header;