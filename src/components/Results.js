import React from "react";
import SearchBar from "./SearchBar";
import { Heading2 } from "./Heading";

function Results() {
  return (
    <section className="main">
      <div className="searchContainer">
        <div className="resultsContainer">
          <div className="resultsTopContainer">
            <div className = 'heading2Container'>
              <Heading2 />
            </div>

            <SearchBar/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
