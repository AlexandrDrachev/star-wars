

export const getPlanetsAction = (number) => {
    return {
        type: "GET_PLANETS_ACTION",
        numberPage: number
    };
};

export const getPlanetsSaga = (planets) => {
    return {
        type: "GET_PLANETS_SAGA",
        payload: planets
    };
};

export const toggleContentLoading = (bool) => {
    return {
        type: "TOGGLE_CONTENT_LOADING",
        payload: bool
    };
};