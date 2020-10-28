import React from "react";

import { ReactComponent as SpinnerLogo } from "./starwars.svg";

const Spinner = ({ w, h, color }) => {
    return (
        <div className="relative w-full h-screen overflow-y-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center">
                    <div className={`${w} ${h} ${color} spinner`}>
                        <SpinnerLogo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;