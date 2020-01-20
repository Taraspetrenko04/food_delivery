export const isLoaded = () => {
    return {
        type: 'IS_LOADED',
    }
};

export const isLoadedFalse = () => {
    return {
        type: 'IS_LOADED_FALSE',
    }
};


export const setByCategory = (category) => {
    return {
        type: 'SET_BY_CATEGORY',
        payload: category,
    }
};


export const showAllCategories = () => {
    return {
        type: 'SHOW_ALL_CATEGORIES',
    }
};



export const onAddedToCard = (id) => {
    return {
        type: 'ON_ADDED_TO_CARD',
        payload: id,
    }
};







