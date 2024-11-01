import React from "react";
import Track from "./Track.js";

const Tracklist = (props) => {
    return(
        <div>
            {props.track.map(e=>{
                return (<Track 
                    track={e}
                    key={e.id}
                    isRemoval={props.isRemoval}
                    removeTrack={props.removeTrack}
                    addTrack={props.addTrack}
                />);
            })}
        </div>
    );
}

export default Tracklist;