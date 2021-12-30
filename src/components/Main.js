import React from "react";
import SearchBar from "./SearchBar";
import { Heading } from "./Heading";
import SearchButton from './SearchButton';

function Main(props) {


  return (
    <section className="main">
      <div className="searchContainer">
        <Heading />
        <SearchBar keyword = {props.keyword} updateTerm = {props.update} />
        <SearchButton setFirstSearch = {props.setFirstSearch} keyword = {props.keyword} text = 'Search' redirect = 'results'/> 
      </div>
    </section>
  );
}

export default Main;
