import React,{useState} from "react";
import './CreatePlaylistForm.css';


const CreatePlaylistForm = (props)=>{

    return (
        <form>
            <div className="input-group">
                <input type="text" id="playlist-name" placeholder="Playlist name" onChange={props.onPlaylistName}/>
            </div>

            <div id="public-container">
                <h5>Public</h5>
                <div id="radio-button-container">
                    <div className="public-radio">
                        <input type="radio" id="true" name="public" value={true} checked onClick={props.onPublicState}/>
                        <label for="true">True</label>
                    </div>

                    <div className="public-radio">
                        <input className="public-radio" type="radio" id="false" name="public" value={false} onClick={props.onPublicState}/>
                        <label for="false">False</label>
                    </div>
                </div>
            </div>

            <div id="collabrative-container">
                <h5>Collab</h5>
                <div id="radio-button-container">
                    <div className="collab-radio">
                        <input type="radio" id="collab-true" name="collab" value={true} onClick={props.onCollabState}/>
                        <label for="collab-true">True</label>
                    </div>

                    <div className="collab-radio">
                        <input type="radio" id="collab-false" name="collab" value={false} checked onClick={props.onCollabState}/>
                        <label for="collab-false">False</label>
                    </div>
                </div>
            </div>


            <div className="input-group">
                <input type="text" id="description" placeholder="Add description (optional)" onChange={props.onDescription}/>
            </div>
            
        </form>
    )
}



export default CreatePlaylistForm;