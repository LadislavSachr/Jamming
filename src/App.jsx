import React, { useState, useEffect } from 'react';
import SearchResults from './components/SearchResults.jsx';
import SearchBar from './components/SearchBar.jsx';
import Author from './components/Author.jsx';
import './App.css';

function App() {
  const [token,setToken] = useState("");
  const [expires,setExpires] = useState(0);
  const [data, setData] = useState([]);
  let interval;

  function tokenHandler(tok){
    setToken(tok.access_token);
    setExpires(tok.expires_in);
    interval = setInterval(()=>{setExpires(prev=>prev-1)},1000)
  }
  function dataHandler(response){
    setData(response);
  }
  useEffect(()=>{
    localStorage.setItem('expiration', expires);
    if(expires<=0&&token){
      localStorage.removeItem('access_token');
      setToken("");
      interval = 0;
      window.location = "http://localhost:5173/"
    }
  },[expires])
  useEffect(()=>{
    setToken(localStorage.getItem('access_token'));
    setExpires(localStorage.getItem('expires'));
  },[]);

  if(token&&expires){
    return (
    <>
      <h1>Hello</h1>
      <SearchBar onClick={dataHandler} token={token} />
      <SearchResults data={data}/>
    </>
    )
  }else{
    return <Author onClick={tokenHandler} />
  }
}

export default App
