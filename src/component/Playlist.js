import React, {useState} from "react";
import Tracklist from "./Tracklist.js";

const Playlist = (props) =>{
    const [name,setName]=useState("");
    
    const changeHandler = (e) =>{
        setName(e.target.value);
    }
    const clickHandler = () =>{
        props.onSave(name);
        setName("");
    }
    return (
        <div>
            <h2>PLAYLIST</h2>
            <input type="text" onChange={changeHandler} value={name}/>
            <Tracklist track={props.track} isRemoval="yes" removeTrack={props.removeTrack} />
            <button onClick={clickHandler}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;