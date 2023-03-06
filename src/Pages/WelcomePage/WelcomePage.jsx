import React,{useState,useEffect} from "react";
import Header from "../../Components/Header/Header";
import spotifyLogo from '../../assets/spotify-logo.jpeg';
import { Navigate } from "react-router-dom";
import './WelcomePage.css';
import useAuth from "../../customHooks/useAuth";


const WelcomePage = ()=>{
    const { accessToken,isAuthenticated } = useAuth();

    // console.log(isAuthenticated);
    // console.log(accessToken);

    return (
        <div id="welcome-page-container">
            <Header/>

            <main id="welcome-main-container">
                <div id="heading-container">
                    <h2>Spotify Tracker</h2>
                </div>

                <div id="img-container">
                    <img id="spotify-img" src={spotifyLogo} alt="" />
                </div>
            </main>
        </div>
    )
}



export default WelcomePage;