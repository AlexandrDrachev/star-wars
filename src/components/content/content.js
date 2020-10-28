import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {getPlanetsAction} from "./redux/content-actions";
import Spinner from "../spinner";
import Planet from "./planet";

const Content = ({ history, match }) => {

    const [ dataPlanets, setDataPlanets ] = useState(null);
    const [ countPage, setCountPage ] = useState(1);

    const dispatch = useDispatch();
    const planets = useSelector((state) => state.contentState.planets);
    const countPlanets = useSelector((state) => state.contentState.countPlanets);
    const loading = useSelector((state) => state.contentState.loading);
    const [ pages, setPages ] = useState(null);

    useEffect(() => {
        if (!planets) {
            console.log(5);
            dispatch(getPlanetsAction(countPage));
        }
        console.log(planets);
    }, [planets]);

    useEffect(() => {
        if (planets) {
            console.log(777);
            setDataPlanets(planets);
        }
    }, [planets]);

    useEffect(() => {
        let pagesArr = [];
        if (countPlanets) {
            for (let i = 1; i <= Math.ceil(countPlanets / 10); i++) {
                pagesArr.push(i);
            }
            setPages(pagesArr);
            console.log(pages);
        }
    }, [countPlanets]);

    const renderPagination = () => {
        return pages.map((page, idx) => {
            return (
                <div
                    key={idx}
                    onClick={() => {
                        setCountPage(page);
                        dispatch(getPlanetsAction(page));
                    }}
                    className={`text-xl mx-5 rounded px-3 pt-1 cursor-pointer flex flex-col
                justify-center items-center ${countPage === page ? `bg-gray-700` : `bg-gray-900`}
                hover:bg-gray-700`}>
                    {page}
                </div>
            );
        });
    };

    const renderPlanets = () => {
        return dataPlanets.map((planet, idx) => {
            return (
                <div key={idx} className="w-1/3 mx-10">
                    <Planet name={planet.name} climate={planet.climate} population={planet.population} routeId={planet.id}/>
                </div>
            );
        });
    };

    if (loading) {
        return <Spinner color={`text-blue-600`} h={`h-30`} w={`w-40`} />
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {dataPlanets &&
            <div className="w-full m-10 flex justify-center items-center flex-wrap">
                {renderPlanets()}
            </div>}
            {pages &&
            <div className="w-full flex justify-start items-center">
                {renderPagination()}
            </div>}
        </div>
    );
};

export default Content;