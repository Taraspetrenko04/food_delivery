import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';


//create component wich redirect to // category
//set the filtered items
class Filter extends Component {

    // constructor(props) {
        // super(props);
        // створимо реф, щоб отримати посилання на DOM-елемент поля введення
        // this.tagName = React.createRef();
        // this.focusTextInput = this.focusTextInput.bind(this);
    //   }


     setByCategory = (event) => {
        // let name = event.target.className;
        let name = event.currentTarget.className;
        // let name = event.target.ReactDOM.li;
        console.log(name);
    }


  render(){  

    return(
        <div className='filter__wrapper'>
            <ul>
                <li onClick={this.setByCategory} className='drink' alt='drink' name='drink'><i className="fas fa-wine-bottle"></i></li>
                <li onClick={this.setByCategory} className='pizza'><i className="fas fa-pizza-slice"></i></li>
                <li onClick={this.setByCategory} className='burger'><i className="fas fa-hamburger"></i></li>
                <li onClick={this.setByCategory} className='salad'><i className="fas fa-leaf"></i></li>
            </ul>
        </div>
    )
  }
}

export default Filter;