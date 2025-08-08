import React, {useState} from 'react';
import Tracklist from './Tracklist';

function Playlist(props){
    const [name, setName]=useState("");

    function handleClick(){
        props.onSave(name);
        setName("");
    }

    return (
        <div>
            <h2>Your playlist!</h2>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <Tracklist onClick={props.onClick} butt={props.butt} data={props.data}/>
            <button onClick={handleClick}>SAVE TO SPOTIFY!</button>
        </div>
    )
}

export default Playlist;