import React from 'react';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SearchButton(props) {

    const [redirect, setRedirect] = useState(false);
    const [imageURL, setURL] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState();
    const endpoint = 'https://images-api.nasa.gov';

    function search() {
        setRedirect(true);
        axios.get(`${endpoint}/search?q=${props.keyword}`).then((res) => {
            console.log(res);
        }).catch((e) => { console.log(e);})
    }

    function process(stringer) {
        var index = String(stringer).indexOf("Read more");
        return(String(stringer).substring(0, index));
    }


    return (<>
    <p style = {{color: "white"}}>{title} {process(description)}</p>
            <button className = 'searchButton' onClick = {search}>
                {props.text}
            </button>
            {redirect && props.redirect != "" ? <Navigate to = {props.redirect}/> : <></>}</>);


}

export default SearchButton;