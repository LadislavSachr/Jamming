import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./component/SearchBar.js";
import SearchResults from "./component/SearchResults.js";
import Playlist from "./component/Playlist.js";

const App = () =>{
  const [searchVal,setSearchVal] = useState("");
  const search = (v) =>{
    setSearchVal(v);
  };
  const spotify=[
    {
      name:"song1",
      artist:"artist1",
      album:"album1"
    },
    {
      name:"song2",
      artist:"artist2",
      album:"album2"
    },
    {
      name:"song3",
      artist:"artist3",
      album:"album3"
    },
    {
      name:"song4",
      artist:"artist4",
      album:"album4"
    },
    {
      name:"song5",
      artist:"artist5",
      album:"album5"
    },
    {
      name:"song6",
      artist:"artist6",
      album:"album6"
    },
    {
      name:"song7",
      artist:"artist7",
      album:"album7"
    },
    {
      name:"song8",
      artist:"artist8",
      album:"album8"
    },
    {
      name:"song9",
      artist:"artist9",
      album:"album9"
    }
  ];
  return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <SearchResults track={spotify} />
      <Playlist track={spotify} />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
