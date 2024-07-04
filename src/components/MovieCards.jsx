import React from "react";

function MovieCards({
  poster_path,
  name,
  addtoWatchlList,
  movieObj,
  removewatchList,
  watchlist,
}) {
  function doesContains(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-[175px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-105 duration-700  m-4"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path}`,
      }}
    >
      {doesContains(movieObj) ? (
        <div
          className="absolute bottom-1 right-1 text-xl bg-gray-900/60 rounded items-center"
          onClick={() => removewatchList(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="absolute bottom-1 right-1 text-xl bg-gray-900/60 rounded items-center"
          onClick={() => addtoWatchlList(movieObj)}
        >
          &#128525;
        </div>
      )}
      <div className="text-white text-sm md:text-xl w-full text-center bg-gray-900/60   rounded">
        {name}
      </div>
    </div>
  );
}

export default MovieCards;
