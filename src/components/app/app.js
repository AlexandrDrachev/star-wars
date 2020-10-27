import React from "react";

import { useDispatch } from "react-redux";
import { appStateTestAction } from "./redux/app-actions";

const App = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <div
                onClick={() => dispatch(appStateTestAction())}
                className="w-full container mx-auto flex flex-col justify-center items-center text-white">
                App
            </div>
        </div>
    );
};

export default App;