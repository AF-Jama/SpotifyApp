import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import person from '../../../assets/images/spinner.svg';
import { Roboto } from "next/font/google";
import { Categories } from "@/types/types";
import { APIError } from "@/types/types";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface Props{
}

const getData = async (accessToken:string)=>{
    let res = await fetch(`${process.env.BASE_URL}/browse/categories`,{
        headers:{
            'Authorization':` Bearer ${accessToken}`,
            'content-type':"application/json"
        }
    });

    return res.json() as Promise<Categories>;
}



const Page: React.FC<Props> = async ()=>{

    console.log(process.env.BASE_URL);

    const cookieStore = cookies();

    let accessToken = cookieStore.get("access_token");

    if(!accessToken) redirect('/');

    let data = await getData(accessToken.value);

    console.log(data.categories);

    if(!data){
        return (
            <>
                <div>
                    <h4 className={`${roboto.className} text-lg text-center text-white mt-1`}>No Categories Found</h4>
                </div>
            </>
        )
    }


    return (
        <>

            <div className="grid grid-cols-2 gap-2 mt-10 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 overflow-hidden">
                {data.categories.items.map((cat)=>(
                    
                <div className="flex flex-col overflow-hidden rounded-md relative hover:">
                    <Link className="h-50 md:h-80 lg:h-100 block group" href={`/dashboard/categories/${cat.id}`}>
                        <Image src={cat.icons[0].url} width={500} height={500} className="h-full w-full object-cover" alt=""/>
                    </Link>
                    <div className="mt-2 absolute bottom-2 inset-x-0">
                        <h3 className={`text-center ${roboto.className} text-xl text-white`}>{cat.name}</h3>
                    </div>
                </div>

                ))} 
            </div>
        </>
    )
}



export default Page;