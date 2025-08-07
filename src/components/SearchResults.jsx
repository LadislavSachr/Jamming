import React, {useState} from 'react';
import datas from './data.js';
import Resultlist from './Resultlist.jsx';
import Playlist from './Playlist.jsx';
import style from '../modules/SearchResults.module.css';

function SearchResults(){
    const [data,setData] = useState(datas);
    const [playlist, setPlaylist] = useState([]);

    function idGenerator(){
        let bol;
        let id;
        do{
            bol = false;
            id = Math.floor(Math.random()*10000); // generate id from 0 to 10000
            playlist.forEach(track=>{
                if(track.id===id){
                    bol=true;
                }
            });
        }while(bol);
        return id;
    }

    function handleAdd(track){
        
        track["id"]=idGenerator();
        setPlaylist((prev)=>{
            return [track, ...prev]; 
        });
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