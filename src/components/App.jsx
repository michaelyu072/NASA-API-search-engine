import React from "react";
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/search" element = {<SearchBar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
