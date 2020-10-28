import React from "react";

import { ReactComponent as UpworIcon } from "../app/png/upwork.svg";
import { ReactComponent as GitHubIcon } from "../app/png/github.svg";

const Footer = () => {

    return (
        <div className="w-full border-t-4 border-white mt-5 p-4 flex flex-col justify-center items-center mb-10">
            <div className="flex justify-start items-center mt-2 ml-1">
                <div className="text-white w-12 h-12">
                    <GitHubIcon />
                </div>
                <a
                    rel="noreferrer"
                    className="mb-1 hover:text-indigo-600"
                    target="_blank"
                    href="https://github.com/AlexandrDrachev/star-wars">
                    https://github.com/AlexandrDrachev/star-wars
                </a>
            </div>
            <div className="flex justify-start items-center">
                <div className="text-white w-10 h-8 mb-2">
                    <UpworIcon/>
                </div>
                <a
                    rel="noreferrer"
                    className="ml-5 hover:text-indigo-600"
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~012a861fc6367091d0?viewMode=1">
                    https://www.upwork.com/freelancers/~012a861fc6367091d0?viewMode=1
                </a>
            </div>
        </div>
    );
};

export default Footer;