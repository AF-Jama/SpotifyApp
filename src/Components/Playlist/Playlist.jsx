import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PlaylistCard from '../PlaylistCard';
import useFetch from '../../customHooks/useFetch';
import useSize from '../../customHooks/useSize';
import './Playlist.css';

function Playlist(props) { 
    const { size } = useSize();
    const { data,loading,error } = useFetch(`https://api.spotify.com/v1/users/${props.userId}/playlists?limit=${(size<600)?'5':'10'}`); // conditional chaining??

    // console.log(data);

    return (
        <div id='playlist-container'>
            <div id="playlist-title-container">
                <h4>Your Playlist</h4>
            </div>
            <hr />

            <div id="playlist-cards-container">
                {(loading||error) &&
                <div id="loading-container">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            
                }

                {data &&
                
                // data.items.map(playlist=><PlaylistCard image={playlist.images[0]?.url} name={playlist.name} public={(playlist.public)?"Public":"Private"} tracks={playlist.tracks.total}/>) // render playlist cards
                data.items
                .filter(playlist=>playlist.tracks.total!==0)
                .map(playlist=><PlaylistCard image={playlist.images[0]?.url} name={playlist.name} public={(playlist.public)?"Public":"Private"} tracks={playlist.tracks.total}/>) // filters and map array (chaining)
                }

                
                
            </div>
            
            <span id='arrow-left'>{<FontAwesomeIcon icon={faArrowLeft}/>}</span>
            <span id='arrow-right'>{<FontAwesomeIcon icon={faArrowRight}/>}</span>
        </div>
    );
}

export default Playlist;