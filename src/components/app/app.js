import React from "react";

import { useDispatch } from "react-redux";
import { appStateTestAction } from "./redux/app-actions";

import starWarsIcon from "./png/starwars.png";
import { ReactComponent as StarWarsLogo } from "../spinner/starwars.svg";
import Spinner from "../spinner/spinner";

const App = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <div
                className="w-full container mx-auto flex flex-col justify-center items-center text-white text-sm">
                <div className="w-full">
                    <Spinner w={`w-40`} h={`h-30`} color={`text-indigo-700`} />
                </div>
            </div>
        </div>
    );
};

export default App;