import React from "react";
import Tracklist from "./Tracklist.js";

const Playlist = (props) =>{
    return (
        <div>
            <h2>PLAYLIST</h2>
            <input type="text"/>
            <Tracklist track={props.track} isRemoval="yes"/>
            <button>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;