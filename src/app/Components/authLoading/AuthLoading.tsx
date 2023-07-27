"use client" // client component

import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie, parseCookies } from "nookies";
import Cookies from "js-cookie";
import Spinner from '../../../assets/images/spinner.svg';
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import useAuth from "@/app/customHooks/useAuth";

const roboto = Roboto({
    weight:"400",
    subsets:['latin']
})

const Page: React.FC = ()=>{
    const { accessToken, setAccessToken } = useAuth();
    // const [accessToken,setAccessToken] = useState<string|null>(null); // set access token state
    // const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false); // set authentication state
    const router = useRouter();


    useEffect(()=>{
        const hash = window.location.hash;
        const cookieAccessToken = Cookies.get("access_token");   
        
        if(!hash && !cookieAccessToken) router.push('/'); // triggered if returned hash and access token stored as cookie evaluates to false

        if(cookieAccessToken){
            setAccessToken(cookieAccessToken);
            return router.push('/dashboard/search')
        };

        if(hash && !cookieAccessToken){
            const [token,left] = hash.split('#access_token=')[1].split("&token"); // destructures array containing token and array
    
            // Cookies.set("access_token",token,{
            //     maxAge:120,
            //     path:"/"
            // });

            setCookie(null,'access_token',token,{
                maxAge:"3600",
                path:"/"
            })

            setAccessToken(token);
    
            router.push('/dashboard/search');

        }
    
        
    
    
    },[router,setAccessToken]);



    return (
        <div id="inner-container" className=" w-[95%] max-w-lg mx-auto p-3 flex flex-col items-center">
            <Image src={Spinner} alt="" height={100} width={100}/>
            <h1 className={`text-base text-[#198d42] ${roboto.className} italic`}>Authorising</h1>  
        </div>
    )
}



export default Page;