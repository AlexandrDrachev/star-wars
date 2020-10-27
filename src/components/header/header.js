import React from "react";

import { ReactComponent as Logo } from "../spinner/starwars.svg"

const Header = () => {

    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center text-6xl border-b-4 border-white">
                <div className="w-40 h-30 text-white">
                    <Logo />
                </div>
            </div>
        </div>
    );
};

export default Header;