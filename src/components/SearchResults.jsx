import React, {useState} from 'react';
import Resultlist from './Resultlist.jsx';
import Playlist from './Playlist.jsx';
import style from '../modules/SearchResults.module.css';

function SearchResults({data,token}){
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
    async function handleSave(name){
        try{
            let response = await fetch("https://api.spotify.com/v1/me",{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const user = await response.json(); // you will need id from this object
            let id = user.id;
            response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists`,{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: name
                })
            })
            const pl = await response.json();
            id = pl.id;
            const uris = playlist.map(track=>track.uri);
            fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`,{
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    uris: uris
                })
            });
            setPlaylist([]);
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className={style.div}>
            <Resultlist onClick={handleAdd} butt="add" data={data}/>
            <Playlist onSave={handleSave} onClick={handleRemove} butt="rem" data={playlist}/>
        </div>
    );
}

export default SearchResults;