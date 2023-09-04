"use client"

import React from "react";
import searchIcon from '../../../assets/images/search-icon.png';
import Link from "next/link";
import listIcon from '../../../assets/images/list-icon.png';
import createPlaylistIcon from '../../../assets/images/create-playlist.png';
import Image from "next/image";


const SideBar = ()=>{
    return (
        <div id="side-bar-container" className="fixed left-0 top-0 bottom-0 p-2 w-14 flex flex-col items-center gap-5 bg-white">
            <div id="artist-search-container-icon" className="rounded-md border-2 border-solid border-black">
                <Link href='/dashboard/search' key={``}>
                    <Image src={searchIcon} alt=""/>
                </Link>
            </div>

            <div id="artist-search-container-icon" className="rounded-md border-2 border-solid border-black">
                <Link href={`/dashboard/categories`}>
                    <Image src={listIcon} alt=""/>
                </Link>
            </div>

            <div id="artist-search-container-icon" className="rounded-md border-2 border-solid border-black">
                <Link href={`/dashboard/user/top`} key={``}>
                    <Image src={createPlaylistIcon} alt=""/>
                </Link>
            </div>

        </div>
    )
}



export default SideBar;