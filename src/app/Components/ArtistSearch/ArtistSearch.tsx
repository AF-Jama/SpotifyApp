"use client"

import useAuth from "@/app/customHooks/useAuth";
import { QueryClient, QueryClientProvider, useQuery  } from "react-query";
import { useState, useEffect, useReducer } from "react";
import { nFormatter } from "@/utils/client/utils";
import { Artist } from "@/types/types";
import Spinner from '../../../assets/images/spinner.svg';
import Open from '../../../assets/images/open.svg';
import Popularity from '../../../assets/images/popularity.svg';
import Followers from '../../../assets/images/followers.svg';
import Genre from '../../../assets/images/genre.svg';
import noImageFound from '../../../assets/images/no-image-found.png';
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface Props{
    accessToken:string
}

const queryClient = new QueryClient()


const ArtistSearch: React.FC<Props> = ({ accessToken })=>{
    const [query,setQuery] = useState<string>(''); // set query state
    const { isLoading, error, data } = useQuery<Artist,Error>({queryFn:()=>fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/search?q=${query}&type=artist`,{
        headers:{
            'Authorization':` Bearer ${accessToken}`,
            'content-type':"application/json"
          }
    }).then(res=>res.json()),queryKey:['q',query]});

    console.log(isLoading);

    // console.log(data?.artists.items[0].images.length);




    return (
        <>
            <div id="input-container" className="  m-auto">
                <input type="text" className="w-full p-2 rounded-md border-0 outline-none" placeholder="Search for artist" onChange={(e)=>setQuery(e.target.value)}/>
            </div>

            {(error) && <p className="text-white">Error</p>}

            {(isLoading) && <Image src={Spinner} className="h-20 w-20 m-auto mt-4" alt=""/>}

            {(error) && <p className={`text-white text-center mt-1 ${roboto.className}`}>Could not find artist data</p>}

            {
            (data && !isLoading && !error && query) &&
            
            <div className={`w-[95%] max-w-md mt-2 m-auto relative ${(query)?"max-h-[1000px] transition-all duration-300 ease-in-out":"max-h-0 overflow-y-hidden transition-all duration-300 ease-in-out"}`}>
                {/* <p className="text-red-700">{accessToken}</p> */}
                <div className="h-15 w-full">
                    <Image src={(data.artists?.items[0]?.images.length===0)?noImageFound:data.artists?.items[0]?.images[0].url} className="w-full h-full rounded-md" width={500} height={500} alt=""/>
                </div>

                <div id="artist-info-container" className="mt-2">
                    <h1 className={`text-[#1DB954] ${roboto.className} text-lg text-center font-extrabold`}>{data.artists?.items[0].name}</h1>

                    <div id="stats-container" className="grid grid-col-1 md:grid-cols-3 p-2 content-center">
                        <div id="followers-container" className="mt-2 flex flex-row items-center justify-center gap-2">
                            <Image src={Followers} className="w-10 h-10" alt=""/>
                            <p className="text-white font-bold text-center text-base">{nFormatter(data.artists.items[0].followers.total,1)}</p>
                        </div>
                        <div id="listens-container" className="mt-2 flex flex-row items-center justify-center gap-2">
                            <Image src={Popularity} className="w-10 h-10" alt=""/>
                            <p className="text-white font-bold text-center text-base">{data.artists.items[0].popularity}</p>
                        </div>
                        <div id="popularity-container" className="mt-2 flex flex-row items-center justify-center gap-2">
                            <Image src={Genre} className="w-10 h-10" alt=""/>
                            <p className="text-white font-bold text-center text-base">{data.artists.items[0].genres[0]}</p>
                        </div>
                    </div>
                </div>

                <Link href={data.artists.items[0].external_urls.spotify} target="_blank">
                    <Image src={Open} className="h-6 w-6 absolute top-1 right-1" alt="" width={500} height={500}/>
                </Link>
            </div>
            
            }
        </>
    )
}



export default ArtistSearch;