import React from "react";
import SearchBar from "./SearchBar";
import { Heading2 } from "./Heading";
import SearchButton from './SearchButton';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Results(props) {

    const [sourceURL, setURL] = useState(props.urls);
    const [imgURL, setImgURL] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const endpoint = 'https://images-api.nasa.gov';

    function updateKeyWord() {
        if(props.keyword) {
        axios.get(`${endpoint}/search?q=${props.keyword}`).then((res) => {
          console.log(res);
          var arr = res.data.collection.items;
          var newArr = [];
          for(var i = 0; i < arr.length; ++i) {
            if(arr[i].href.includes('/image/')) {
              newArr.push(arr[i].href);
            }
          }
          updateURL(newArr);
          
        }).catch((e) => { console.log(e);})
      }
    }

    function truncate(stringer) {
        var index = stringer.length;

        if(stringer.includes("Read More")) {
            index = String(stringer).indexOf("Read more");
        }

        return(String(stringer).substring(0, index));
    }

    function shorten(stringer) {
        return String(stringer).length < 50 ? stringer : String(stringer).substring(0, 50) + "...";
    }

    async function updateURL(urls) {
        setURL(urls);
        if(urls.length == 0) {
            setImgURL([]);
            setTitle([]);
            setDescription([]);
            return;
        }
        var imgArr = [];
        var descriptionArr = [];
        var titleArr = [];
        for(var i = 0; i < 10; ++i) {
            let prom = await axios.get(urls[i]);
            var result = JSON.parse(JSON.stringify(prom));
            console.log(result);
            console.log(result.data[0]);
            imgArr.push(result.data[0]);
            let prom2 = await axios.get(result.data[result.data.length - 1]);
            var obj = JSON.parse(JSON.stringify(prom2)).data;
            console.log(obj);
            var newObj = {};
                for (var k in obj) {
                    var key = k.includes(":") ? k.split(':')[1].toLowerCase() : k.toLowerCase();
                    var values = obj[k];
                    newObj[key] = values;
                }
            descriptionArr.push(truncate(newObj.description));
            titleArr.push(newObj.title);
        }
        console.log(imgArr);
        console.log(descriptionArr);
        console.log(titleArr);
        setImgURL(imgArr);
        setTitle(titleArr);
        setDescription(descriptionArr);
    }


    useEffect(() => {
        updateKeyWord();
    }, [props.firstSearch])

  return (
    <section className="main">
      <div className="searchContainer">
        <div className="resultsContainer">
          <div className="resultsTopContainer">
            <div className = 'heading2Container'>
              <Heading2 />
            </div>

            <SearchBar keyword = {props.keyword} updateTerm = {props.update} />
            <SearchButton update = {updateKeyWord} keyword = {props.keyword} text = 'Search' redirect = ''/>

          </div>
          <div className = 'resultsBottomContainer'>
              <div className = 'resultsList'>
               {sourceURL.length != 0 ? sourceURL.map((c, index) => {
                   if(index < 10) {
                    return <div className = 'resultsItem' key = {index}>
                            <div className = 'imgContainer'>
                            <div className = 'imgPlaceHolder'><img className = 'resultImg' src = {imgURL[index]}></img></div>
                            </div>
                            <p className = 'resultTitle'>{title[index] ? title[index] : "loading..."}</p>
                            <p className = 'resultDescription'>{description[index] ? shorten(description[index]) : "loading..."}</p>
                    </div>;
                   }
               }) : <div className = 'noResults'><span className = 'noResults'>No Results</span></div>}           
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
