import React from 'react';
import Tracklist from './Tracklist';

function Resultlist(props){
    return (
        <div>
            <h2>Result</h2>
            <Tracklist onClick={props.onClick} butt={props.butt} data={props.data}/>
        </div>
    )
}

export default Resultlist;