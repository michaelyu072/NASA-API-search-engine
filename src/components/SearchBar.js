import React from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {

    return ( <>
        <div className = 'searchBarContainer'>
        <div className = 'iconContainer'>
        <SearchIcon/>
        </div>
        <input defaultValue = {props.keyword} className = 'searchBar' 
        onChange = {(e) => {props.updateTerm(e.target.value);}}>

        </input>
        </div>
        </>) ;

}

export default SearchBar;