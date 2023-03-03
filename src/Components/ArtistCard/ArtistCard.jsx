import React,{useState} from "react";
import './ArtistCard.css';


const ArtistCard = (props)=>{



    return (
        <div id="artist-card-container">
            <img src={props.image} alt="" />

            <div id="artist-card-info-container">
                <h5>{props.name}</h5>
                <p id="genre">{props.genres}</p>

                <div id="artist-view-container">
                    <p>{props.views}</p>
                </div>
            </div>
        </div>
    )
}



export default ArtistCard;