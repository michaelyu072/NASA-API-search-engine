import React from "react";
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Results';
import NotFound from './NotFound';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/Results" element = {<Results/>}/>
          <Route path = '*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
