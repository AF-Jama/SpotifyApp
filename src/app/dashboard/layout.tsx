import SideBar from "../Components/SideBar/SideBar";
import AuthContextProvider from "@/Contexts/authContext/authContextProvider";
import Image from "next/image";
import { Roboto } from "next/font/google";
import SpotifyLogo from '../../assets/images/spotify_icon.png';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const getData = async ()=>{
  // returns user information
}

export default async function SiteLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
      
        <SideBar/>

        <main className="ml-14 bg-[#060125] relative">
          
          <div id="inner-main-container" className="w-[95%] max-w-6xl mx-auto">

            <div id="user-info-container" className="border boder-white flex justify-between mt-4 p-2 ">
              <div className="flex gap-2 items-center">
                <Image src={SpotifyLogo} alt="" className="h-7 w-7 md:h-10 md:w-10 rounded-sm"/>
                <p className={`text-white ${roboto.className} text-lg`}>Stats</p>
              </div>

              <div className="flex items-center gap-2">
                {/* <Image src={SpotifyLogo} alt="" className="h-7 w-7 md:h-10 md:w-10 rounded-sm"/> */}
                <p className={`text-white ${roboto.className} text-sm`}>Username</p>
              </div>

            </div>

            {children}

          </div>


        </main>
        
      </>
    );
  }