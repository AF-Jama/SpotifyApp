import React,{useState} from "react";
import './Search.css';


const SearchBar = (props)=>{




    return (
        <input type="text" id="search-bar" onChange={props.onSearchChange} />
    )
}



export default SearchBar;