const initialState = {
  isMobileOpen: false,
  email: '',
  password: '',
  userName: '',
  isValidName: false,
  isValidEmail: false,
  isValidPassword: false,
  isLogged: false,
  users: [],
};


const login = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_OPEN":
      return {
        ...state,
        isMobileOpen: true,
      };


    case "SIDEBAR_CLOSE":
      return {
        ...state,
        isMobileOpen: false,
      };


    case "SET_NAME":
      return {
        ...state,
        userName: action.payload,
      };


    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };


    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };


    case "SET_USERS_LIST":
      return {
        ...state,
        users: action.payload,
      };


    case "IS_NAME_VALID":
      // let mailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      // let passwordCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      let nameCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      if (nameCheck.test(state.userName)) {
        return {
          ...state,
          isValidName: true,
        };


      } else {
        return {
          ...state,
          isValidName: false,
        };
      }

    case "IS_EMAIL_VALID":
      let emailCheck = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/i;
      // let emailCheck = /^[а-яіІїЇєЄА-ЯёЁa-zA-Z0-9]+$/;
      if (emailCheck.test(state.email)) {
        return {
          ...state,
          isValidEmail: true,
        };


      } else {
        return {
          ...state,
          isValidEmail: false,
        };
      }



      



    default:
      return state;
  }
};

export default login;