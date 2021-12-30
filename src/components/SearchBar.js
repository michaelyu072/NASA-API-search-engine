import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {

    return ( <>
        <div className = 'searchBarContainer'>
        <div className = 'iconContainer'>
        <SearchIcon/>
        </div>
        <input placeholder = 'enter an astronomy term!' defaultValue = {props.keyword} className = 'searchBar' 
        onChange = {(e) => {props.updateTerm(e.target.value);}}>

        </input>
        </div>
        </>) ;

}

export default SearchBar;