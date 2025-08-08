import React, {useState} from 'react';

const baseUrl = "https://api.spotify.com/v1/search"
const track = "type=track"

//retrieves data that we want from fetch response
function helper(data){
    return data.map(track=>{return{
        name: track.name,
        id: track.id,
        uri: track.uri,
        artist: track.artists.map(artist=>artist.name).join(", "),
        album: track.album.name
    }
    });
}

function SearchBar({token,onClick}){
    const [result, setResult]=useState("");

    async function clickHandler(){
        const url = `${baseUrl}?q=${result}&${track}`
        const response = await fetch(url,{
            headers: {
                Authorization: `Bearer ` + token
            }
        });
        const data = await response.json();
        const tracks = helper(data.tracks.items); 
        onClick(tracks);
    }
    
    return(
        <div>
            <input type="text" value={result} onChange={(e)=>{setResult(e.target.value)}}/>
            <button onClick={clickHandler} >Search</button>
        </div>
    )
}

export default SearchBar;