import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';


//Link Tag is used below for redirecting from one page to the another internally

const MainPage  = () => {
    return (
        <div>
            <h1>Welcome to Login Page!</h1>
            <LoginForm />
            
            <br/>
            <Link to="/Details" >Continue as Guest</Link>
        </div>
    );
};


export default MainPage;
