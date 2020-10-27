import { appReducer, initialAppState } from "../components/app/redux/app-reducer";
import { contentReducer, initialContentState } from "../components/content/redux/content-reducer";

const rootReducer = (state, action) => {
    console.log('action: ', action.type);
    console.log('state: ', state);
    return {
        appState: appReducer(initialAppState, action),
        contentState: contentReducer(initialContentState, action)
    };
};

export default rootReducer;