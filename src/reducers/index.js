import { combineReducers } from 'redux';
import modal from './modal';
import login from './login';
import items from './items';

export default combineReducers({
  modal,
  login,
  items,
})



// const initialState = {
//     isOpen : false,
// };

// const reducer = (state = initialState, action) => {
//     // const {type, payload} = action;
//     switch (action.type) {
//         case 'MODAL_OPEN':
//             return {
//                 isOpen: true,
//             };


//         case 'MODAL_CLOSE':
//             return {
//                 isOpen: false,
//             };    
    

//         default:
//             return state;
//     }
// }

// export default reducer;
