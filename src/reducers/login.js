const initialState = {
  isMobileOpen: false,
  email: '',
  password: '',
  userName: '',
  isValidName: true,
  isValidEmail: true,
  isValidPassword: true,
  isLogged: false,
  users: [],
  loading: false,
  message: '',
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



      case "IS_NAME_VALID_TRUE":
        return {
                ...state,
                isValidName: true,
              };
      case "IS_NAME_VALID_FALSE":
        return {
                ...state,
                isValidName: false,
              };


      case "IS_EMAIL_VALID_TRUE":
        return {
                ...state,
                isValidEmail: true,
              };
      case "IS_EMAIL_VALID_FALSE":
        return {
                ...state,
                isValidEmail: false,
              };

              
      case "IS_PASSWORD_VALID_TRUE":
        return {
                ...state,
                isValidPassword: true,
              };
      case "IS_PASSWORD_VALID_FALSE":
        return {
                ...state,
                isValidPassword: false,
              };

      case "LOGED-IN":
        return {
                ...state,
                isLogged: true,
              };
      case "LOGED-OUT":
        return {
          ...state,
          isLogged: false,
        };


        case "IS_LOADING_TRUE":
        return {
          ...state,
          loading: true,
        };

        case "IS_LOADING_FALSE":
        return {
          ...state,
          loading: false,
        };


        case "SET_MESSAGE":
        return {
          ...state,
          message: action.payload,
        };
      

    default:
      return state;
  }
};

export default login;