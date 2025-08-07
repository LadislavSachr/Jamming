import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults.jsx';
import SearchBar from './components/SearchBar.jsx';
import Authorization from './components/Authorization.jsx';
import './App.css';

function App() {
  const [token,setToken] = useState("");
  const [expires,setExpires] = useState(0);
  let interval;

  function tokenHandler(tok){
    setToken(tok.access_token);
    setExpires(tok.expires_in);
    interval = setInterval(()=>{setExpires(prev=>prev-100)},1000)
  }
  useEffect(()=>{
    localStorage.setItem('expiration', expires);
    console.log(expires);
    if(expires===0&&token){
      localStorage.removeItem('access_token');
      setToken("");
      interval = 0;
    }
  },[expires])
  useEffect(()=>{
    setToken(localStorage.getItem('access_token'));
    setExpires(localStorage.getItem('expires'));
  },[]);

  if(token){
    return (
    <>
      <h1>Hello</h1>
      <SearchBar />
      <SearchResults />
    </>
    )
  }else{
    return <Authorization onClick={tokenHandler} />
  }
}

export default App
