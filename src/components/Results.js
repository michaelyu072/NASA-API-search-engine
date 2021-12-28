import React from "react";
import SearchBar from "./SearchBar";
import { Heading2 } from "./Heading";
import SearchButton from './SearchButton';
import { useState } from 'react';

function Results(props) {


  return (
    <section className="main">
      <div className="searchContainer">
        <div className="resultsContainer">
          <div className="resultsTopContainer">
            <div className = 'heading2Container'>
              <Heading2 />
            </div>

            <SearchBar keyword = {props.keyword} updateTerm = {props.update}/>
            <SearchButton keyword = {props.keyword} text = 'Search' redirect = ''/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
