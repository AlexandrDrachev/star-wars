import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {getPlanetsAction} from "./redux/content-actions";
import Spinner from "../spinner";

const Content = () => {

    const [ dataPlanets, setDataPlanets ] = useState(null);
    const [ countPage, setCountPage ] = useState(1);

    const dispatch = useDispatch();
    const planets = useSelector((state) => state.contentState.planets);
    const countPlanets = useSelector((state) => state.contentState.countPlanets);
    const [ pages, setPages ] = useState(null);

    useEffect(() => {
        if (!planets) {
            dispatch(getPlanetsAction(countPage));
        }
        console.log(planets);
    }, [planets]);

    useEffect(() => {
        if (planets) {
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

    if (!dataPlanets) {
        return <Spinner color={`text-blue-600`} h={`h-30`} w={`w-40`} />
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div>Content</div>
            {pages &&
            <div className="w-full flex justify-start items-center">
                {renderPagination()}
            </div>}
        </div>
    );
};

export default Content;