import React from "react";

function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-card d-flex flex-column">
          <img src={movie.Poster} alt="movie" />
          <div className="movie-title-year">
            <a>
              {movie.Title} ({movie.Year}){" "}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
