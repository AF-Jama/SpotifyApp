import React from "react";
import { cookies } from "next/headers";
import { Roboto } from "next/font/google";
import TopItems from "@/app/Components/TopItems/TopItems";
import styles from '../../../../styles/global.module.css';


const roboto = Roboto({
    weight:["400"],
    display:"swap",
    subsets:["latin"],
})


const Page:React.FC = ()=>{

    const cookieStore = cookies();

    let accessToken = cookies().get("access_token")?.value || ''; // returns access token or string 


    return (
        <>  

        <TopItems accessToken={accessToken}/>
        
        </>
    )
}



export default Page;