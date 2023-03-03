import React,{useContext} from "react";
import authContext from "../Contexts/authContext/authContext";


const useAuth = ()=>{
    // return auth context provider values
    return useContext(authContext);
}



export default useAuth;