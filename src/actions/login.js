export const sidebarMobileOpen = () =>({ type: "SIDEBAR_OPEN" });


export const sidebarMobileClose = () => ({ type: "SIDEBAR_CLOSE" });


export const setName = userName => {
  return {
    type: "SET_NAME",
    payload: userName,
  };
};


export const setEmail = email => {
  return {
    type: "SET_EMAIL",
    payload: email,
  };
};


export const setPassword= password => {
  return {
    type: "SET_PASSWORD",
    payload: password,
  };
};


export const setUsersList= users => {
  return {
    type: "SET_USERS_LIST",
    payload: users,
  };
};


export const isNameValidTrue = () => ({type: "IS_NAME_VALID_TRUE"});
export const isNameValidFalse = () => ({type: "IS_NAME_VALID_FALSE"});

export const isEmailValidTrue = () => ({type: "IS_EMAIL_VALID_TRUE"});
export const isEmailValidFalse = () => ({type: "IS_EMAIL_VALID_FALSE"});

export const isPasswordValidTrue = () => ({type: "IS_PASSWORD_VALID_TRUE"});
export const isPasswordValidFalse = () => ({type: "IS_PASSWORD_VALID_FALSE"});

export const loggedIn = () => ({type: "LOGED-IN"});
export const loggedOut = () => ({type: "LOGED-OUT"});
