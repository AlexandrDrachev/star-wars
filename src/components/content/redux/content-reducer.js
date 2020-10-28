

export const initialContentState = {
    loading: false,
    planets: null,
    countPlanets: null,
    people: null
};

export const contentReducer = (state, action) => {
    if (state === undefined) {
        return initialContentState;
    }
    switch (action.type) {
        case "GET_PLANETS_SAGA":
            return {
                ...state,
                planets: action.payload.results,
                countPlanets: action.payload.count
            };
        case "TOGGLE_CONTENT_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        default: {
            return state;
        }
    }
};