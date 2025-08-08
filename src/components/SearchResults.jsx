import React, {useState} from 'react';
import Resultlist from './Resultlist.jsx';
import Playlist from './Playlist.jsx';
import style from '../modules/SearchResults.module.css';

function SearchResults({data}){
    const [playlist, setPlaylist] = useState([]);

    function handleAdd(track){
        let bool = true;
        playlist.forEach(song=>{
            if(song.id===track.id){
                alert("Track already in the playlist!");
                bool = false;
            }
        })
        if(bool){
            setPlaylist((prev)=>{
                return [track, ...prev]; 
            });
        }
    };
    function handleRemove(track){
        setPlaylist((prev)=>{
            return prev.filter(song=>{
                return song.id!==track.id;
            }); 
        });
    };
    function handleSave(){
        setPlaylist([]);
    }
    return (
        <div className={style.div}>
            <Resultlist onClick={handleAdd} butt="add" data={data}/>
            <Playlist onSave={handleSave} onClick={handleRemove} butt="rem" data={playlist}/>
        </div>
    );
}

export default SearchResults;