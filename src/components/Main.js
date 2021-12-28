import React from "react";
import SearchBar from "./SearchBar";
import { Heading } from "./Heading";
import SearchButton from './SearchButton';
import { useState } from 'react';

function Main(props) {

const [currentTerm, updateTerm] = useState(props.keyword);

  return (
    <section className="main">
      <div className="searchContainer">
        <Heading />
        <SearchBar keyword = {props.keyword} updateTerm = {updateTerm} />
        <SearchButton currentTerm = {currentTerm} update = {props.update} text = 'Search' redirect = 'results'/> 
      </div>
    </section>
  );
}

export default Main;
