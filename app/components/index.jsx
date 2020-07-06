import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { BeatLoader } from 'react-spinners';


//Link Tag is used below for redirecting from one page to the another internally

const MainPage  = () => {
    
    return (
        <div id="Head">
            <h1 align="center" border-botton="1px"> WELCOME TO <br/> OPENING DOORS...CLOSING LOANS </h1>
            <h3>Login Page</h3>
            <LoginForm />
            
            <br/>
            
            <Link style={linkstyle} to="/Details" >Continue as Guest</Link>
            
        </div>
    );

};

const linkstyle = {
    color: 'white'
};

export default MainPage;
