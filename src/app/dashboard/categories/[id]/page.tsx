import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SingleCategory } from "@/types/types";
import { APIError } from "@/types/types";


const getData = async (id:string,accessToken:string):Promise<SingleCategory>=>{
    let res = await fetch(`${process.env.BASE_URL}/browse/categories/${id}/playlists`,{
        headers:{
            'Authorization':` Bearer ${accessToken}`,
            'content-type':"application/json"
        }
    });

    return res.json();
}

interface Props{
    params:{
        id:string
    }
}

const Page: React.FC<Props> = async ({ params }: { params :{ id:string } })=>{

    const cookieStore = cookies();

    let accessToken = cookieStore.get("access_token");

    if(!accessToken) redirect('/');

    const data = await getData(params.id,accessToken.value);

    console.log(data.playlists.items[0]);

    return (
        <div id="music-container" className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.playlists.items.map(item=>(
                <Link href={item.external_urls.spotify} target="_blank">
                    <div id="playlist-container" className="flex gap-2">    
                        <div id="img-container" className="w-1/2 h-55">
                            <Image src={item.images[0].url} alt="" width={500} height={500} className="h-full w-full object-cover rounded-md"/>  
                        </div>

                        <div className="w-1/2">
                            <h1 className="text-white text-base">{item.name}</h1>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}



export default Page;