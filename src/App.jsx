import React, { useState } from 'react';
import SearchResults from './components/SearchResults.jsx';
import SearchBar from './components/SearchBar.jsx';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello</h1>
      <SearchBar />
      <SearchResults />
    </>
  )
}

export default App
