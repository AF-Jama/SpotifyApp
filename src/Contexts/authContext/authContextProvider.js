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

    const getCurrentDate = ()=>{
        let currentTimeStamp = Date.now();
        currentTimeStamp = Math.floor(currentTimeStamp/1000); // returns current unix time stamp in seconds


        return getCurrentDate;
    }
    
    const expiryDate = ()=>{
        // triggered when user logs in and expiry date 1hr into future is generated
        let currentTimeStamp = Date.now(); // returns current unix timestamp

        let futureDate = Math.floor((currentTimeStamp/1000)+3600); // returns unix timestamp in seconds 1 hour in future (3600 seconds)
        
        return futureDate.toString();
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
        
        if(getCurrentDate()>parseInt(cookieExpiryDate)){
            // triggered if current date exceeds cookie expiration date
            Logout();
        }

        if(!cookieAccessToken||!cookieExpiryDate){
            Logout();
        }

        if(!cookieAccessToken && !cookieExpiryDate && hash){
            const [token,left] = hash.split('#access_token=')[1].split("&token"); // destructures array containing token and left of array
            const bearerToken = `Bearer ${token}`;
            Cookies.set("access_token",bearerToken); // sets access token cookie
            Cookies.set('expiry_date',expiryDate()); // sets access token expiry date cookie to unix timestamp
            window.location.hash = ""; // sets window location hash to empty string
            setAccessToken(bearerToken); // sets access token state
            setIsAuthenticated(true);
            setLoading(false);
        }
        
    },[Cookies.get('access_token'),Cookies.get('expiry_time')]) // side effect runs on initial render (on mount) and on dependency array

    return (
        <authContext.Provider value={{accessToken,isAuthenticated,loading,Logout}}>
            {children}
        </authContext.Provider>
    )
}



export default AuthContextProvider;