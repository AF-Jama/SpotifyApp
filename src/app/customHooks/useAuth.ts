"use client"

import { useContext } from "react";
import { authContext } from "@/Contexts/authContext/authContext";

const useAuth = ()=>{
    return useContext(authContext);
}



export default useAuth;