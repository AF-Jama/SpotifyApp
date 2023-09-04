"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { isError, useQuery } from "react-query";
import { Roboto } from "next/font/google";
import { ArtistTopItems, TrackTopItems } from "@/types/types";
import Spinner from '../../../assets/images/spinner.svg';
import styles from '../../../styles/global.module.css';


const roboto = Roboto({
    weight:["400"],
    display:"swap",
    subsets:["latin"],
})

interface Props{
    accessToken:string,
}

type EntityType = 'artists' | 'tracks'; // Entity type

const TopItems:React.FC<Props> = ({ accessToken })=>{
    const [q,setType] = useState<EntityType>('artists'); // set type of entitiy
    const { isLoading, isError, data } = useQuery<ArtistTopItems,Error>({queryFn:()=>fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/me/top/${q}`,{
        headers:{
            'Authorization':` Bearer ${accessToken}`,
            'content-type':"application/json"
          }
    }).then(res=>res.json()),queryKey:['q',q]});

    console.log(data);




    return (
        <>
            <div className="md:grid md:grid-cols-2">
                <div className={`text-white text-center ${roboto.className} text-2xl ${styles.typeArrow} ${(q==='tracks')?"border-b-2 border-white":""}`} onClick={()=>setType('tracks')}>
                    Tracks
                </div>

                {/* <hr className="md:hidden" /> */}

                <div className={`text-white text-center ${roboto.className} text-2xl ${(q==='artists')?"border-b-2 border-white":""}`} onClick={()=>setType('artists')}>
                Artists  
                </div>
            </div>

            {
                (q==='artists')?<h1 className={`text-[#1DB954] mb-2 text-center text-xl ${roboto.className}`}>Your Top Artists</h1>:<h1 className={`text-[#1DB954] mb-2 text-center text-xl ${roboto.className}`}>Your Top Tracks</h1>
            }

            {
                (isLoading||isError || !data) && 
                
                <div className="text-center border-red-600 flex justify-center">
                    <Image className="w-14 h-14 text-center" src={Spinner} alt=""/>
                </div>
            }

            {
                (data && q==='artists' && !isLoading && !isError) &&

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        data.items.map(artist=>(
                            <div className="relative rounded-xl" key={artist.id}>
                                <div className="h-48 md:h-60">
                                    <img className="w-full h-full object-cover opacity-60 hover:opacity-40 transition-all" src={artist?.images[0]?.url} height={500} width={500} alt="" />
                                </div>

                                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                                    <p className="text-white text-center text-xl font-bold">{artist.name}</p>
                                    <p className="text-[#1DB954] text-center">{artist.popularity}</p>
                                </div>
                            </div>
                        ))

                    }


                </div>
            }

            {
                (data && q==='tracks' && !isLoading && !isError) &&

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        data.items.map(artist=>(
                            <div className="" key={artist.id}>
                                <div className="h-48 md:h-60">
                                    <img className="w-full h-full object-cover opacity-90 hover:opacity-60 transition-all" src={artist.album?.images[0]?.url} alt="" />
                                </div>


                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
}



export default TopItems;