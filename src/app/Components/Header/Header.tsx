"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import spotifyLogo from '../../../assets/images/spotify_icon.png';
import { Roboto } from "next/font/google";
import { PT_Sans } from "next/font/google";
import '../../../styles/Components/Header.css';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const ptSans = PT_Sans({
    weight:"700",
    subsets:['latin']
})

interface Props  {
    visibility:boolean;
    hand: (event:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
}


const Header: React.FC = ()=>{
    const [visibility,setVisibility] = useState(false); // set visibility state




    return (
        <div id="header-container" className="h-fit fixed top-0 inset-x-0 z-20 bg-black">
            <div id="inner-header-container" className="flex flex-row justify-between px-4 py-2 w-[90%] mx-auto max-w-7xl items-center">
                <div id="spotify-logo-container" className={`flex flex-row items-center ${roboto.className}`}>
                    <Image src={spotifyLogo} height={50} width={50} style={{marginRight:"0.5rem"}} className="mx-2" alt=""/>
                    <p className={`${roboto.className} text-white text-lg`}>Stats</p>
                </div>

                <nav className={`fixed text-white top-0 bottom-0 left-0 bg-[#1DB954] z-20 ${(visibility)?"p-2 w-[225px] transition-all":"p-0 w-0 overflow-x-hidden transition-all"}`}>
                    <p className={`${roboto.className} text-3xl mb-3 text-black`}>Spotify Stats</p>
                    <div id="button-container">
                        <div id="logout-container">
                            <button className="bg-white rounded-md text-black text-xl py-2 px-8">Sign In</button>    
                        </div>
                        <div id="sign-in-container">
                            <button className="bg-black rounded-md text-white text-xl py-2 px-9 mt-2">Login</button>
                        </div>
                    </div>
                </nav>

                <div id="b-btn-container" className={(visibility)?"change":"ontainer"} onClick={(e)=>setVisibility(!visibility)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <hr />  
        </div>
    )
}



export default Header;