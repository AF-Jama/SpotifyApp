import "./globals.css";
import styles from '../styles/Pages/index.module.css';
import Image from 'next/image';
import Header from './Components/Header/Header';
import ActionButton from "./Components/ActionButton/ActionButton";
import SignInButton from "@/styles/Components/SignInButton/SignInButton";
import musicIcon from '../assets/images/music-icon.svg';
import musicStats from '../assets/images/stats.svg';
import playlistCreate from '../assets/images/create.svg';
import { onLoginClick } from "@/utils/client/utils";
import { setCookie, parseCookies  } from "nookies";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:"400",
  subsets:['latin']
})


const Page: React.FC = async  ()=>{

  const cookieStore = cookies()

  let accessToken = cookieStore.get("access_token");

  if(accessToken) redirect('/dashboard/search');


  return (
    <>
      <Header/>

      <div id="hero-section-container" className={`text-white min-h-[calc(100vh-20px)] flex flex-col justify-center md:flex md:flex-row-reverse md:justify-start ${styles.heroBackground} z-0`}>
          <div id="hero-text-container" className="rounded-md mx-auto p-5 text-center md:w-1/4 md:flex md:flex-col md:justify-center">
            <h1 className="text-xl my-1">Spotify Stats</h1>

            <div id="sign-in-button">
              <SignInButton/>
            </div>

            <div id="hero-text" className="my-2 text-xl">
              Welcome to Spotify Stats, <span className="text-[#1DB954] italic">a dashboard tailored for you</span>.
            </div>

          </div>
        {/* <div id="inner-hero" className={`hidden flex-1 bg-red-700 md:block`}>  

        </div> */}

        <div className={`hidden md:w-3/4 md:block ${styles.leftImageContainer}`}>

        </div>
      </div>

    {/* <div id="features-grid-container" className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3 md:auto-rows-max min-h-[500px] p-5">    
      <div id="top-songs" className="bg-white rounded-md text-black px-2 py-8 md:relative md:top-0"> 
        <div className="flex flex-row items-center">
            <Image src={musicIcon} alt="" className="mr-1"/>
            <p className={`${roboto.className} text-xl`}>Show Your Top Songs</p>
        </div>

          <p>
            Want to know what your Top Songs you have been listening to on your Spotify account? 
          </p>
      </div>

      <div id="search-artist" className="bg-white rounded-md text-black px-2 py-8 md:relative md:top-16"> 
        <div className="flex flex-row items-center">
          <Image src={musicStats} alt="" className="mr-1"/>
          <p className={`${roboto.className} text-xl`}>Get your Favourite artist stats</p>
        </div>

        <p>
          Want to know what your Favourite Artist stats ie: followers, albums, singles?
        </p>
      </div>

      <div id="create-playlist" className="bg-white rounded-md text-black px-2 py-8 md:relative md:top-44"> 
        <div className="flex flex-row items-center">
          <Image src={playlistCreate} alt="" className="mr-1"/>
          <p className={`${roboto.className} text-xl`}>Create your own custom playlist</p>
        </div>

        <p>
          Create a custom playlist and add as many songs to it 
        </p>
      </div>
    </div> */}

    </>
  )
}



export default Page;