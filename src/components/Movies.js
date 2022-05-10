import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = movies.map(movie => {
      const {title, time, genres} = movie
      const showGenres = genres.map(genre=> {
    return (
      <li key={genre}>{genre}</li>
    )
  })
    return (
    <div key={title}>
      <h2>Name: {title}</h2>
      <p>Time: {time}</p>
      <p>Genres:</p>
      <ul>
        {showGenres}
      </ul>
    </div>)
    })

  return (
  <div>
    <h1>Movies Page</h1>
    {renderMovies}
  </div>
  );
}

export default Movies;
