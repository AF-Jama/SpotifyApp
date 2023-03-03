import React,{useState,useEffect} from "react";
import Cookies from "js-cookie";
import authContext from "./authContext";


const AuthContextProvider = ({children})=>{
    const [accessToken,setAccessToken] = useState(''); // set access token state
    const [loading,setLoading] = useState(true); // set loading state
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    
    const Logout = ()=>{
        Cookies.remove("access_token"); // remove access token from cookie storage
        Cookies.remove("expiry_date"); // remove access token expiry date
        setAccessToken('');
        setIsAuthenticated(false);
        setLoading(false);
    }
    
    const expiryDate = ()=>{
        // triggered when user logs in and expiry date 1hr into future is generated
        let futureDate = new Date();
        futureDate.setUTCHours(futureDate.getHours()+1)
        
        return futureDate
    }
    
    useEffect(()=>{
        const hash = window.location.hash
        const cookieAccessToken = Cookies.get("access_token");
        const cookieExpiryDate = Cookies.get("expiry_date");
        const currentTimeNow = new Date();

        if(cookieAccessToken){
            console.log("HIT")
            // console.log(cookieAccessToken);
            setAccessToken(cookieAccessToken);
            setIsAuthenticated(true);
            setLoading(false);
        }

        if(currentTimeNow<cookieExpiryDate){
            Logout();
        }

        if(!cookieAccessToken||!cookieExpiryDate){
            Logout();
        }

        if(!cookieAccessToken && !cookieExpiryDate && hash){
            const [token,left] = hash.split('#access_token=')[1].split("&token"); // destructures array containing token and left of array
            const bearerToken = `Bearer ${token}`;
            Cookies.set("access_token",bearerToken); // sets access token cookie
            let currentDate = new Date();
            let futureDate = currentDate.setHours(currentDate.getHours()+1);
            Cookies.set('expiry_date',currentDate); // sets access	 token expiry date cookie
            window.location.hash = ""; // sets window location hash to empty string
            setAccessToken(bearerToken); // sets access token state
            setIsAuthenticated(true);
            setLoading(false);
        }
        
    },[accessToken]) // side effect runs on initial render (on mount) and on dependency array

    return (
        <authContext.Provider value={{accessToken,isAuthenticated,loading,Logout}}>
            {children}
        </authContext.Provider>
    )
}



export default AuthContextProvider;