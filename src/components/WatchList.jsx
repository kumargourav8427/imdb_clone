import React, { useEffect } from "react";
import { useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchList, removewatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setcurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let hadleFilter = (genre) => {
    setcurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncresing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncresing]);
  };
  let sortDecreasing = () => {
    let sortedDecresing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecresing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);

    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap gap-3 m-4">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => hadleFilter(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-semibold"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-semibold "
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-5">
        <input
          type="text"
          placeholder="Seach Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none rounded"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="border border-gray-200 m-8 rounded-lg relative overflow-x-auto">
        <table className="w-full text-gray-600 text-center rtl:text-right " >
          <thead className="border-b-2">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="flex justify-center px-6 py-3">
                <div onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="mx-3">Ratings</div>

                <div onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">Popularity</th>
              <th scope="col" className="px-6 py-3">Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr scope="row" className="border-b-2 px-6 py-4 " key={movieObj.id}>
                    <td className="p-5 rounded  block gap-10 md:flex   ">
                      <img
                        className="h-[5rem]  md:h-[8rem] w-[10rem] rounded"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="flex items-center justify-center p-3">
                        {movieObj.original_title}
                      </div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => removewatchList(movieObj)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
