const initialState = {
    isMobileOpen: false,
    isLogged: false,
    userName: '',
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

    default:
      return state;
  }
};

export default login;