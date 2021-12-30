import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);

    function search() {
        setRedirect(true);
        if(props.update) {
            props.update();
        }
        if(props.setFirstSearch) {
            props.setFirstSearch(true);
        }
    }

    

    return (<>
            <button className = 'searchButton' onClick = {search}>
                {props.text}
            </button>
            {redirect && props.redirect != ""? <Navigate to = {props.redirect}/> : <></>}</>);


}

export default SearchButton;