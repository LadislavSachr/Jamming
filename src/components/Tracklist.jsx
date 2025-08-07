import React from 'react';
import Track from './Track';

function Tracklist(props){
    return (
        <div>
            {props.data.map((track,i)=>{
                return <Track onClick={props.onClick} key={i} butt={props.butt} track={track}/>
            })}
        </div>
    )
}

export default Tracklist;