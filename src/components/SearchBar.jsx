import React, {useState} from 'react';

function SearchBar(){
    const [result, setResult]=useState("");

    function clickHandler(){

    }
    
    return(
        <div>
            <input type="text" value={result} onChange={(e)=>{setResult(e.target.value)}}/>
            <button onClick={clickHandler} >Search</button>
        </div>
    )
}

export default SearchBar;