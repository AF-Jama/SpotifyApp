import SideBar from "../Components/SideBar/SideBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthContextProvider from "@/Contexts/authContext/authContextProvider";
import Image from "next/image";
import { Roboto } from "next/font/google";
import SpotifyLogo from '../../assets/images/spotify_icon.png';
import standardUser from '../../assets/images/user.svg';
import { SpotifyUser } from "@/types/types";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const getData = async (accessToken:string): Promise<SpotifyUser>=>{
  // returns user information
  let res =  await fetch(`${process.env.BASE_URL}/me`,{
    headers:{
      'Authorization':` Bearer ${accessToken}`,
      'content-type':"application/json"
    }
  });

  return res.json();
}

export default async function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const cookieStore = cookies();

    let accessToken = cookieStore.get("access_token");

    if(!accessToken) redirect('/');

    const data = await getData(accessToken.value);

    return (
      <>
      
        <SideBar/>

        <main className="ml-14">
          
          <div id="inner-main-container" className="w-[95%] max-w-3xl mx-auto">

            <div id="user-info-container" className="border boder-white flex justify-between p-2 mb-5">
              <div className="flex gap-2 items-center">
                <Image src={SpotifyLogo} alt="" className="h-7 w-7 md:h-10 md:w-10 rounded-sm"/>
                <p className={`text-white ${roboto.className} text-lg`}>Stats</p>
              </div>

              <div className="flex items-center gap-2">
                {(data.images.length===0)?<Image src={standardUser} height={500} width={500} alt="" className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-sm"/>:<Image src={data.images[0].url} height={500} width={500} alt="" className="h-8 w-8 md:h-10 md:w-10 object-cover rounded-sm"/>}
                <p className={`text-white ${roboto.className} text-sm`}>{data.display_name}</p>
              </div>

            </div>

            {children}

          </div>


        </main>
        
      </>
    );
  }