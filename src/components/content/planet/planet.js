import React from "react";

const Planet = ({ name }) => {

    return (
        <div className="w-full p-5 border-2 border-gray-900 rounded">
            <div>{name}</div>
        </div>
    );
};

export default Planet;