import React,{useEffect,useState} from "react";
import useAuth from "./useAuth";

const useFetch = (URL)=>{
    const [data,setData] = useState(null); // sets data state 
    const [loading,setLoading] = useState(true); // sets loading state 
    const [error,setError] = useState(false); // sets error state
    const { accessToken } = useAuth();
    
    console.log(`access token is ${accessToken} in useFetch hook`)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let response = await fetch(URL,{
                    headers:{
                        'Authorization': accessToken // sets Authorization header to json web token(JWT) which will be verified server side
                    }
                });
                if(!response.ok) throw Error;
                // if(response.error) throw Error; 
                response = await response.json();

                setData(response);
                setLoading(false);
                setError(false);
            }catch(error){
                console.log(error)
                setData(null)
                setLoading(true);
                setError(true);
            }
        }
        fetchData();
    },[URL,accessToken]) // runs on initial render (initial mount) and changes to dependency array 

    return {data,loading,error}; // returns data,loading,error state
}


export default useFetch;
