import React,{useState,useEffect} from "react";
import ActionButton from "../Common/ActionButton";
import CreatePlaylistForm from "../CreatePlaylistForm";
import useFetch from "../../customHooks/useFetch";
import useAuth from "../../customHooks/useAuth";
import './CreatePlaylist.css';


const CreatePlaylist = (props)=>{
    const [createState,setCreateState] = useState(false); // set create state
    const [playlistName,setPlaylistName] = useState(''); // set playlistName state
    const [publicState,setPublicState] = useState(true); // set public state
    const [collabState,setCollabState] = useState(false); // set collab state
    const [description,setDescription] = useState(''); // set description state
    const [errorState,setErrorState] = useState(null); // set error state
    const { accessToken } = useAuth();

    const onPlaylistName = (event)=>{
        event.preventDefault();

        console.log(event.target.value);

        setPlaylistName(event.target.value);
    }

    const onPublicState = (event)=>{
        // event.preventDefault();

        console.log(event.target.value);

        setPublicState(event.target.value)
    }

    const onCollabState = (event)=>{
        // event.preventDefault();

        setCollabState(event.target.value);
    }

    const onDescription = (event)=>{
        event.preventDefault();

        setDescription(event.target.value);
    }

    const onSubmit = async (event)=>{
        event.preventDefault();

        try{
            if(publicState && collabState) throw new Error("Cannot create collabrative playlist that has a public flag");

            if(!playlistName) throw new Error("Playlist name must not be an empty string");

            let res = await fetch(`https://api.spotify.com/v1/users/${props.userId}/playlists`,{
                method:"POST",
                body:JSON.stringify({
                    name:playlistName,
                    public:publicState,
                    collaborative:collabState,
                    description:description                    
                }),
                headers:{
                    'Authorization':accessToken
                }
            })

            res = await res.json();

            
            if(res.error) throw new Error(res.error.message);
            
            console.log(res);
            setCreateState(true);


        }catch(error){
            console.log(error);
            setErrorState(error);
        }

    }

    useEffect(()=>{
        if(createState||errorState){
            setTimeout(()=>{
                setCreateState(false);
                // setPlaylistName('');
                // setDescription('');
                setPublicState(true);
                setCollabState(false);
                setErrorState(null);
            },3000);
        }
    },[createState,errorState]) // side effect runs on initial render (on mount) and dependency array change


    return (
        <div id="create-playlist-container">
            <div id="create-playlist-title">
                <h4>Create Playlist</h4>
            </div>
            <hr />

            <div id="create-playlist-form-container">
                <CreatePlaylistForm onPlaylistName = {onPlaylistName} onPublicState = {onPublicState} onDescription = {onDescription} onCollabState={onCollabState} playlistName={playlistName} description={description}/>
            </div>

            <div className="button-container">
                <ActionButton text= "Create" onClick={onSubmit}/>
            </div>
            {createState?"Created Playlist":""}
            {errorState?errorState.message:""}
        </div> 
    )
}



export default CreatePlaylist;