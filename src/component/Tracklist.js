import React from "react";
import Track from "./Track.js";

const Tracklist = (props) => {
    return(
        <div>
            {props.track.map(e=>{
                return (<Track 
                    track={e}
                    isRemoval={props.isRemoval}
                />);
            })}
        </div>
    );
}

export default Tracklist;