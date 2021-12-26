
import React from 'react';
import SearchBar from './SearchBar';
import Heading from './Heading';

function Main () {



    return (
        <section className = 'main'>
        <div className = 'searchContainer'>
        <Heading/>
        <SearchBar/>
        {/* <ColorSelector/> */}
        </div>
        </section>
    );
}


export default Main;