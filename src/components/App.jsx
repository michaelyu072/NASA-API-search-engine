import React from "react";
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Results';
import NotFound from './NotFound';
import { useState } from 'react';

function App() {

  const [keyword, updateKeyWord] = useState('default keyword');

  console.log(keyword);
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Main keyword = {keyword} update = {updateKeyWord}/>}/>
          <Route path = "/Results" element = {<Results keyword = {keyword} update = {updateKeyWord}/>}/>
          <Route path = '*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
