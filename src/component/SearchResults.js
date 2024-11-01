import React from "react";
import Tracklist from "./Tracklist.js";

const SearchResults = (props) =>{
    return (
        <div>
            <h2>RESULTS</h2>
            <Tracklist track={props.track} isRemoval="" addTrack={props.addTrack} />
        </div>
    )
}

export default SearchResults;