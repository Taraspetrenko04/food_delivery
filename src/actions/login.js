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
