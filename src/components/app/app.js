import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';

import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import PlanetInfo from "../planet-info";

const App = () => {

    return (
        <div>
            <div
                className="w-full container mx-auto flex flex-col justify-center items-center text-white text-sm font-blackOpsOne">
                <Header />
                <Switch>
                    <Route path="/" exact component={Content} />
                    <Route path="/planet/:id?" component={PlanetInfo} />
                    <Redirect to="/"/>
                </Switch>
                <Footer />
            </div>
        </div>
    );
};

export default App;