import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {

    return ( <>
        <div className = 'searchBarContainer'>
        <div className = 'iconContainer'>
        <SearchIcon/>
        </div>
        <input className = 'searchBar'>

        </input>
        </div>
        </>) ;

}

export default SearchBar;