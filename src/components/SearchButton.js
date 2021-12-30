import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);
    const endpoint = 'https://images-api.nasa.gov';

    function search() {
        setRedirect(true);
        if(props.update) {
            props.update();
        }
    }

    

    return (<>
            <button className = 'searchButton' onClick = {search}>
                {props.text}
            </button>
            {redirect && props.redirect != "" ? <Navigate to = {props.redirect}/> : <></>}</>);


}

export default SearchButton;