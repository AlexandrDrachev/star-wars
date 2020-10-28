import React from "react";

const Planet = ({ name, climate, population }) => {

    return (
        <div className="w-full p-2 border-2 border-gray-900 rounded flex flex-col justify-center items-start bg-gray-800 m-2
        cursor-pointer hover:bg-gray-700 hover:text-gray-900 min-h-120">
            <div className="w-full flex justify-center items-start mb-1 pb-1">
                <div className="w-1/2 flex justify-start items-start">name:</div>
                <div className="w-1/2 flex justify-start items-start">{name}</div>
            </div>
            <div className="w-full flex justify-center items-start mb-1 pb-1">
                <div className="w-1/2 flex justify-start items-start">population:</div>
                <div className="w-1/2 flex justify-start items-start">{population}</div>
            </div>
            <div className="w-full flex justify-center items-start">
                <div className="w-1/2 flex justify-start items-start">climate:</div>
                <div className="w-1/2 flex justify-start items-start">{climate}</div>
            </div>
        </div>
    );
};

export default Planet;