import React,{useState,useEffect} from "react";
import useFetch from "../../customHooks/useFetch";
import './SideBar.css';


const SideBar = (props)=>{

    return (
        <div id="side-bar-container">
            <h4>Welcome {props?.data?.display_name}</h4>
            <div id="side-bar-links-container">
                <a href="#" className="side-bar-link" onClick={props.playlistState}>Your Playlists</a>
                <a href="#" className="side-bar-link" onClick={props.artistState}>Artists Search</a>
                <a href="#" className="side-bar-link" onClick={props.trackState}>Your Saved Tracks</a>
            </div>
        </div>
    )
}



export default SideBar;