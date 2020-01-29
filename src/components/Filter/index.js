import React, {Component} from 'react';
import './style.css';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

class Filter extends Component {
  

  render(){  

    const {setByCategory, } = this.props;


    const getCategory = (event) => {
        let category = event.currentTarget.className;
        return setByCategory(category);
    }

    
    return(
        <div className='filter__wrapper'>
            <ul>
                <li onClick={getCategory} className='drink' alt='drink' name='drink'><FontAwesomeIcon icon={faWineBottle} /></li>
                <li onClick={getCategory} className='pizza'><FontAwesomeIcon icon={faPizzaSlice} /></li>
                <li onClick={getCategory} className='burger'><FontAwesomeIcon icon={faHamburger} /></li>
                <li onClick={getCategory} className='salad'><FontAwesomeIcon icon={faLeaf}/></li>
            </ul>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        // food: state.items.food,
    };
};


const mapDispatchToProps = dispatch => {
    const { setByCategory, } = bindActionCreators(actions, dispatch);
    return {
      setByCategory,
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;