import React from 'react';
import style from '../modules/Track.module.css'

function Track(props){
    function clickHandler(){
        props.onClick(props.track);
    }
    return (
        <div className={style.div}>
            <h3 className={style.h3}>{props.track.songName}</h3>
            <p className={style.p}>{props.track.artist}</p>
            <button onClick={clickHandler} className={style.button}>{props.butt==="add"?"+":"-"}</button>
        </div>
    );
}

export default Track;