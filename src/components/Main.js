import React from "react";
import SearchBar from "./SearchBar";
import { Heading } from "./Heading";
import SearchButton from './SearchButton';

function Main() {
  return (
    <section className="main">
      <div className="searchContainer">
        <Heading />
        <SearchBar />
        <SearchButton text = 'Search' redirect = 'results'/> 
      </div>
    </section>
  );
}

export default Main;
