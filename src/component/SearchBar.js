import React, {useState} from "react";

function SearchBar(props){
    const [val,setVal] = useState("");

    const changeHandler = (e) =>{
        setVal(e.target.value);
    }
    const clickHandler = () =>{
        props.onSearch(val);
        setVal("");
    }

    return (
        <div>
            <label for="search">Search</label>
            <input type="text" value={val} onChange={changeHandler} placeholder="search for artist"/>
            <button onClick={clickHandler}>Search</button>
        </div>
    );
}

export default SearchBar;
