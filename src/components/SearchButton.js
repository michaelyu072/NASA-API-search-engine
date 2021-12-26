import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);

    function search() {
        setRedirect(true);
    }

    return (<>
            <button className = 'searchButton' onClick = {search}>
                {props.text}
            </button>
            {redirect? <Navigate to = {props.redirect}/> : <></>}</>);


}

export default SearchButton;