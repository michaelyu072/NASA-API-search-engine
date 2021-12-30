import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { SettingsEthernetRounded } from '@mui/icons-material';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [change, setChange] = useState(false);


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



    useEffect(() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            search();
            
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      });


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