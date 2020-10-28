import { appReducer, initialAppState } from "../components/app/redux/app-reducer";
import { contentReducer, initialContentState } from "../components/content/redux/content-reducer";

const initialState = {
    appState: initialAppState,
    contentState: initialContentState
};

const rootReducer = (state = initialState, action) => {
    const { appState, contentState } = state;
    return {
        appState: appReducer(appState, action),
        contentState: contentReducer(contentState, action)
    };
};

export default rootReducer;