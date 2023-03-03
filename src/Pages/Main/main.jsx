import React,{useState,useEffect} from "react";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar";
import Playlist from "../../Components/Playlist";
import PlayingTracks from "../../Components/PlayingTracks";
import ArtistSearch from "../../Components/ArtistSearch/ArtistSearch";
import useAuth from "../../customHooks/useAuth";
import useFetch from "../../customHooks/useFetch";
import useSize from "../../customHooks/useSize";
import { Navigate, useNavigate } from "react-router";
import './main.css';



const Main = ()=>{
    const navigate = useNavigate();
    const { accessToken,isAuthenticated,loading } = useAuth();
    const { size } = useSize();
    // console.log(typeof size)
    const { data,loading:load,error } = useFetch(`https://api.spotify.com/v1/me`);
    const [content,setContent] = useState(1); // set content state

    console.log(accessToken)

    const setPlaylistState = ()=>{
        setContent(1);
    }

    const setArtistState = ()=>{
        setContent(2);
    }

    const setxState = ()=>{
        setContent(3);
    }

    // console.log(size);   

    const contentBar = (state)=>{
        switch (state) {
            case 1:
                return <Playlist userId = {data.id}/>;
        
            case 2:
                return <ArtistSearch/>;

            case 3:
                return 1;
        }
    }

    if(!isAuthenticated){
        return navigate('/')
    }
    
    if(loading && !data){
        return (
            <div id="loading-container">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }

    if(isAuthenticated && data){
        console.log("auth")
        return (
            <div id="main-page-container">
                <Header/>
    
                <main id="">
                    <div id="wrapper-container">
                        <SideBar playlistState={setPlaylistState} artistState={setArtistState} trackState={setxState}/>
                        {contentBar(content)}
                    </div>
                </main>
            </div>
        )
        
    }

    // if(!isAuthenticated && !accessToken )
    
    
    
    // console.log(isAuthenticated);


}



export default Main;