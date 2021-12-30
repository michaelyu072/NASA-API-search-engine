import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);
    const [clicked, setClicked] = useState(false);

    function search() {
        if(!props.keyword) {
            return;
        }
        setRedirect(true);
        setClicked(true);
        if(props.update) {
            props.update();
        }
    }

    // console.log("clicked " + clicked);
    // console.log("loaded " + props.loaded);

    useEffect(() => {
        setClicked(false);
    }, [props.imgURL])
    

    return (<>
            <button className = 'searchButton' onClick = {search}>
                {!props.loaded && clicked? 'Loading...' : props.text}
            </button>
            {redirect && props.redirect != ""? <Navigate to = {props.redirect}/> : <></>}</>);


}

export default SearchButton;