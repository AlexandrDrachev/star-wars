import React from "react";

import { useDispatch } from "react-redux";

import Spinner from "../spinner/spinner";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";

const App = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <div
                className="w-full container mx-auto flex flex-col justify-center items-center text-white text-sm font-blackOpsOne">
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    );
};

export default App;