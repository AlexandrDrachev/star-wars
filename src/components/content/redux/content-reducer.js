

export const initialContentState = {
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
            console.log(action.payload);
            return {
                ...state,
                planets: action.payload.results,
                countPlanets: action.payload.count
            };
        default: {
            return state;
        }
    }
};