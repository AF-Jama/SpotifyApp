"use client"

import React,{useState,useEffect} from "react";
import Cookies from "js-cookie";
import { authContext } from "./authContext";

const AuthContextProvider = ({ children }:{ children: React.ReactNode })=>{ 
    const [accessToken,setAccessToken] = useState<string>(''); // set access token state

    return (
        <authContext.Provider value={{accessToken,setAccessToken}}>
            {children}
        </authContext.Provider>
        
    )
}



export default AuthContextProvider;
