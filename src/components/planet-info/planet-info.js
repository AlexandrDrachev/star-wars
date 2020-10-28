import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPlanetsAction } from "../content/redux/content-actions";
import Spinner from "../spinner/spinner";

const PlanetInfo = ({ match }) => {

    const dispatch = useDispatch();
    const planets = useSelector((state) => state.contentState.planets);

    const [ planetInfo, setPlanetInfo ] = useState(null);
    const [ residents, setResidents ] = useState([]);
    const { id } = match.params;

    const getPlanet = () => {
        return planets.find((planet) => planet.id === id);
    };

    useEffect(() => {
        if (planets) {
            const planet = getPlanet();
            Promise.all(
                planet.residents.map((url) => {
                    return fetch(url)
                        .then((res) => res.json())
                        .then((res) => res.name)
                })
            )
                .then((res) => setResidents(res))
                .catch((error) => console.log(error));
            setPlanetInfo(planet);
            return;
        } else {
            dispatch(getPlanetsAction(Math.ceil(id / 10)));
        }
    }, [planets, dispatch, id]);

    const renderResidents = () => {
        return residents.map((item, idx) => {
            if (!item) {
                return null;
            }
            return (
                <div key={idx}>{item}</div>
            );
        });
    };

    if (!planetInfo) {
        return <Spinner w={`w-40`} h={`h-30`} color={`text-blue-600`} />
    }

    return planetInfo &&
        <div className="w-full flex justify-start items-center mt-5 pb-5 border-white">
            <div className="w-1/2 flex justify-start items-start text-4xl">{planetInfo.name}</div>
            <div className="w-1/2 flex flex-col justify-start items-start">
                <div className="w-full flex justify-start items-start p-2 bg-gray-900 rounded-t-md">
                    <div className="w-1/2">rotation period:</div>
                    <div className="w-1/2">{planetInfo.rotation_period}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 bg-gray-800">
                    <div className="w-1/2">diameter:</div>
                    <div className="w-1/2">{planetInfo.diameter}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 p-2 bg-gray-900">
                    <div className="w-1/2">climate:</div>
                    <div className="w-1/2">{planetInfo.climate}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 bg-gray-800">
                    <div className="w-1/2">gravity:</div>
                    <div className="w-1/2">{planetInfo.gravity}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 bg-gray-900">
                    <div className="w-1/2">terrain:</div>
                    <div className="w-1/2">{planetInfo.terrain}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 bg-gray-800">
                    <div className="w-1/2">population:</div>
                    <div className="w-1/2">{planetInfo.population}</div>
                </div>
                <div className="w-full flex justify-start items-start p-2 bg-gray-900 rounded-b-md">
                    <div className="w-1/2">residents:</div>
                    <div className="w-1/2 flex flex-col">{renderResidents()}</div>
                </div>
            </div>
        </div>;
};

export default PlanetInfo;