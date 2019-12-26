import React, { Component } from 'react';
import './style.css';
import MenuButton from '../MenuButton'
import Logo from '../Logo';
// import Menu from './Menu';
// import Modal from '../Modal'


// import { connect } from "react-redux"; //дает доступ к store
// import { bindActionCreators } from "redux";//bind action && dispatch
// import * as actions from "../../actions"; //импортируем все екшены(1) в bindActionCreator 

class Header extends Component{
        // sideBarToggleHandler = this.props;
        render(){
        return(
            <div className='header__wrapper'>
                <MenuButton click={this.sideBarToggleHandler}/>
                <Logo />
                {/* <Logo />
                <Menu /> */}
            </div>
        )
    }
}

//для связки connect and store нужно 2 функции mapStateToProps() mapDispatchToProps()
// const mapStateToProps = state => {
//     // console.log('mapStateToProps: '+ state.modal.isOpen);
//     return {
//       isOpen: state.modal
//     };
//   };
  
//   export default connect(mapStateToProps, /*mapDispatchToProps*/)(Header); //коненкт оборачивает counter
export default Header;