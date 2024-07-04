import React from "react";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  let [watchlist, setWatchList] = useState([]);

  let addtoWatchlList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('movieApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    // console.log(newWatchList);
  };

  let removewatchList = (movieObj) => {
    let filterWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filterWatchList);
    localStorage.setItem('movieApp',JSON.stringify(filterWatchList))
    // console.log(filterWatchList);
  };

  useEffect(()=>{
    let movieFromLocalStorage = localStorage.getItem('movieApp')
    if(!movieFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(movieFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <NavbarComp />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  addtoWatchlList={addtoWatchlList}
                  removewatchList={removewatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} setWatchList={setWatchList} removewatchList={removewatchList}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
