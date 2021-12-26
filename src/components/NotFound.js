import React from "react";
import SearchButton from './SearchButton';


function NotFound() {
  return (
    <section className="main">
      <div className="searchContainer">
        <p className = 'heading'>
            The Page You Are Looking For Does Not Exist
        </p>
        <SearchButton text = 'Go To Home' redirect = '/'/>
      </div>
    </section>
  );
}

export default NotFound;
