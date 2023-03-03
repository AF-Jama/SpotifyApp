import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './PlaylistCard.css';


function PlaylistCard(props) {
    const [active,setActive] = useState(false);

    console.log(active);
    
    return (
        <div id='playlist-card-container' className={active?"":"normal"}>
            <img src={props.image} alt="" />

            <div id="playlist-info-container">
                <p id='playlist-name'>{props.name}</p>

                <div id="meta-data-container">
                    <span id='public-tag'>{props.public}</span>
                    <span id='playlist-tracks'>#{props.tracks}</span>
                </div>
            </div>

            {active?<FontAwesomeIcon id='expand-card-exit' icon={faX} size="1x" onClick={()=>setActive(false)}/>:""}
        </div>
    );
}

export default PlaylistCard;