import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {getPlanetsAction} from "./redux/content-actions";
import Spinner from "../spinner";

const Content = () => {

    const [ dataPlanets, setDataPlanets ] = useState(null);
    const [ countPage, setCountPage ] = useState(2);

    const dispatch = useDispatch();
    const planets = useSelector((state) => state.contentState.planets);

    useEffect(() => {
        if (!planets) {
            dispatch(getPlanetsAction(countPage));
        }
        console.log(planets);
    }, [planets, countPage]);

    useEffect(() => {
        if (planets) {
            setDataPlanets(planets);
        }
    }, [planets]);

    if (!dataPlanets) {
        return <Spinner color={`text-blue-600`} h={`h-30`} w={`w-40`} />
    }

    return (
        <div>
            <div>Content</div>
        </div>
    );
};

export default Content;