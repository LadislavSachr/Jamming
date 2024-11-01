import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./component/SearchBar.js";
import SearchResults from "./component/SearchResults.js";
import Playlist from "./component/Playlist.js";
import Spotify from "./component/Spotify.js";

const App = () =>{
  const [searchVal,setSearchVal] = useState([]);
  const [playlistTracks,setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(()=>{
    if(playlistName!==""){
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("");
        setPlaylistTracks([]);
      });
    }
  },[playlistName]);
  const search = (v) =>{
    Spotify.search(v).then(setSearchVal);
  };
  const save = (v) =>{
    setPlaylistName(v);
  }
  const removeT = (v) =>{
    setPlaylistTracks(prev=>prev.filter(track=> track.id!==v.id));
  }
  const addT = (v) =>{
    if(playlistTracks.some(track => track.id===v.id)){
      return;
    }
    setPlaylistTracks(prev=>[v,...prev]);
  }
  return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <SearchResults track={searchVal} addTrack={addT} />
      <Playlist track={playlistTracks} onSave={save} removeTrack={removeT} />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
