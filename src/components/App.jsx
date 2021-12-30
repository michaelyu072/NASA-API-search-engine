import React from "react";
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Results from './Results';
import NotFound from './NotFound';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [keyword, update] = useState('');
  const [firstSearch, setFirstSearch] = useState('firstSearch');
  const [dataArray, updateDataArray] = useState([]);
  const endpoint = 'https://images-api.nasa.gov';

  function updateKeyWord(newWord) {
    update(newWord);
    if(newWord) {
    axios.get(`${endpoint}/search?q=${newWord}`).then((res) => {
      // console.log(res);
      var arr = res.data.collection.items;
      var newArr = [];
      for(var i = 0; i < arr.length; ++i) {
        if(arr[i].href.includes('/image/')) {
          newArr.push(arr[i].href);
        }
      }
      updateDataArray(newArr);

    }).catch((e) => { console.log(e);})
  }
  }


  return (<>
    <meta name='viewport' content='initial-scale=1, maximum-scale=1' />
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Main setFirstSearch = {setFirstSearch} keyword = {keyword} update = {updateKeyWord}/>}/>
          <Route path = "/Results" element = {<Results firstSearch = {firstSearch} urls = {dataArray} keyword = {keyword} update = {updateKeyWord}/>}/>
          <Route path = '*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div></>
  );
}

export default App;
