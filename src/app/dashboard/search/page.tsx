// import SideBar from "../../Components/SideBar";
import ArtistSearch from "@/app/Components/ArtistSearch/ArtistSearch";
import { NextApiRequest, NextApiResponse, Redirect } from "next";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { getAccessToken } from "@/utils/server/utils";

// const cookieStore = cookies()
// const router = useRouter();

// const getAuthStatus =  ():boolean=>{
//     const accessToken = cookieStore.get("access_token");
//     const refreshToken = cookieStore.get("refresh_token");
//     const expirytime = cookieStore.get("expiry_timestamp");

//     if(accessToken) return true;

//     return false;
// }

interface cookieData{
    name:string,
    value:string
} // cookie data type

type cookieType = {
    [index:number]: cookieData,
}


const Page: React.FC = async ()=>{

    const cookieStore = cookies();

    let accessToken = cookieStore.get("access_token");

    if(!accessToken) redirect('/');

    return (
        <div className="p-2">
            <ArtistSearch accessToken={accessToken.value}/>
        </div>
    )
}



export default Page;