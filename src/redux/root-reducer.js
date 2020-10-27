import { appReducer, initialAppState } from "../components/app/redux/app-reducer";

const rootReducer = (state, action) => {
    console.log('action: ', action.type);
    return {
        appState: appReducer(initialAppState, action)
    };
};

export default rootReducer;