
export const initialAppState = {
    testValue: "App State is ready!"
};

export const appReducer = (state, action) => {
    if (state === undefined) {
        return initialAppState;
    }
    switch (action.type) {
        case "APP_STATE_TEST_SAGA":
            console.log('appState: ', state);
            return state;
        default:
            return state;
    }
};