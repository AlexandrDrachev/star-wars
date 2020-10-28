
export const initialAppState = {
    testValue: "App State is ready!"
};

export const appReducer = (state, action) => {
    if (state === undefined) {
        return initialAppState;
    }
    switch (action.type) {

        default:
            return state;
    }
};