const initialState = {
  isMobileOpen: false,
  email: '',
  password: '',
  userName: '',
  isValidMail: false,
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



    default:
      return state;
  }
};

export default login;