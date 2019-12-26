// MODAL_WINDOW
export const modalOpen = () => {
    return {
        type: 'MODAL_OPEN',
    }
};


export const modalClose = () => {
    return {
        type: 'MODAL_CLOSE',
    }
}


export const logIn = (user) => {
    console.log('action: logIn')
    return {
        type: 'LOG_IN',
        payload: user,//&&&&&&&&&&&&&&&&&&&&&&
    }
}


export const logOut = () => {
    return {
        type: 'LOG_OUT',
    }
}
