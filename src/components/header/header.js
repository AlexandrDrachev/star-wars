import React from "react";

import { ReactComponent as Logo } from "../spinner/starwars.svg"
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center text-6xl border-b-4 border-white">
                <div className="w-40 h-30 text-white">
                    <Link to="/"><Logo /></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;