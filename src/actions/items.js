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




