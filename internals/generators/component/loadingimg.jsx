import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

//Link Tag is used below for redirecting from one page to the another internally

const img  = () => {
    return (
            <div>
            <BeatLoader timeout={3000} />
            </div>
    );
};

export default img;