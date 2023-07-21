"use client"

import useAuth from "@/app/customHooks/useAuth";
import { useState, useEffect, useReducer } from "react";
import Person from '../../../assets/images/spinner.svg'
import Image from "next/image";

interface Props{
    accessToken:string
}


const ArtistSearch: React.FC<Props> = ({ accessToken })=>{
    const [query,setQuery] = useState<string>('');




    return (
        <>
            <div id="input-container" className=" w-[95%] max-w-lg m-auto">
                <input type="text" className="w-full p-2 rounded-md border-0 outline-none" placeholder="Search for artist" onChange={(e)=>setQuery(e.target.value)}/>
            </div>

            <div className={`w-[95%] max-w-lg mt-2 m-auto border-2 border-solid border-white ${(query)?"h-auto duration-75":"h-0 overflow-y-hidden transition-all duration-100"}`}>
                <p className="text-red-700">{accessToken}</p>
                {/* <div className="h-64 w-full">
                    <Image src={Person} height={500} width={500} className="h-full"  alt=""/>
                </div>
                <p className="text-red-600">SUCCESFULL</p> */}
            </div>
        </>
    )
}



export default ArtistSearch;