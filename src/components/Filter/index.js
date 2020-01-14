import React, {Component} from 'react';
import './style.css';
import { connect } from "react-redux"; //дает доступ к store
import { bindActionCreators } from "redux"; //bind action && dispatch
import * as actions from "../../actions/items";


//create component wich redirect to // category
//set the filtered items
class Filter extends Component {
    
    // constructor(props) {
        // super(props);
        // створимо реф, щоб отримати посилання на DOM-елемент поля введення
        // this.tagName = React.createRef();
        // this.focusTextInput = this.focusTextInput.bind(this);
    //   }

  render(){  

    const {setByCategory, } = this.props;


    const getCategory = (event) => {
        let category = event.currentTarget.className;
        return setByCategory(category);
    }

    
    return(
        <div className='filter__wrapper'>
            <ul>
                <li onClick={getCategory} className='drink' alt='drink' name='drink'><i className="fas fa-wine-bottle"></i></li>
                <li onClick={getCategory} className='pizza'><i className="fas fa-pizza-slice"></i></li>
                <li onClick={getCategory} className='burger'><i className="fas fa-hamburger"></i></li>
                <li onClick={getCategory} className='salad'><i className="fas fa-leaf"></i></li>
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