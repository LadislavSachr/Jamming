import React from "react";

const Track = (props) => {
    const buttonFun = () =>{
        if(props.isRemoval){
           return <button onClick={props.removeTrack}>-</button>;
        }else{
           return <button onClick={props.addTrack}>+</button>;
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