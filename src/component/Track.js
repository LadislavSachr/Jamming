import React from "react";

const Track = (props) => {
    const addT = (e) =>{
        props.addTrack(props.track);
    }
    const removeT = (e) =>{
        props.removeTrack(props.track);
    }
    const buttonFun = () =>{
        if(props.isRemoval){
           return <button onClick={removeT}>-</button>;
        }else{
           return <button onClick={addT}>+</button>;
        }
    }
    return (
        <div>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
            {buttonFun()}
        </div>
    );
}

export default Track;