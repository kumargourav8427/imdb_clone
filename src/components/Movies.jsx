import React from "react";
import MovieCards from "./MovieCards";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagignation from "./Pagignation";

function Movies({ addtoWatchlList, removewatchList ,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  function handlePre() {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  }
  function handleNext() {
    setPageNo(pageNo + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=4e8fdf560ebea4beca186b68fead51e9&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="text-xl md:text-2xl font-bold text-center mt-3 md:my-5">Trending Movie</div>

      <div className="flex flex-row flex-wrap justify-around gap-2">
        {movies.map((movieObj) => {
          return (
            <MovieCards
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              addtoWatchlList={addtoWatchlList}
              removewatchList={removewatchList}
              watchlist ={watchlist}

              movieObj={movieObj}
            />
          );
        })}
      </div>
      <Pagignation
        pageNo={pageNo}
        handlePre={handlePre}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;
