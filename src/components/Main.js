import React from "react";
import SearchBar from "./SearchBar";
import { Heading } from "./Heading";
import SearchButton from './SearchButton';
import { useSpring, animated} from 'react-spring';
import {useState, useEffect} from 'react';

function Main(props) {

    const [rendered, toggleRendered] = useState(false);
    const moves = useSpring({opacity : rendered ? 1 : 0, config: {duration: 1000}});

    useEffect(() => {
        toggleRendered(true);
    }, [])


  return (
    <section className="main">
      <animated.div className="searchContainer" style = {moves}>
        <Heading />
        <SearchBar keyword = {props.keyword} updateTerm = {props.update} />
        <SearchButton setFirstSearch = {props.setFirstSearch} keyword = {props.keyword} text = 'Search' redirect = 'results'/> 
      </animated.div>
    </section>
  );
}

export default Main;
