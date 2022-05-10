import React from "react";
import { directors } from "../data";

function Directors() {
  const renderActors = directors.map(director => {
    const {name, movies} = director
    const showMovies = movies.map(movie=> {
  return (
    <li key={movie}>{movie}</li>
  )
})
  return (
  <div key={name}>
    <h2>Name: {name}</h2>
    <p>Movies:</p>
    <ul>
      {showMovies}
    </ul>
  </div>)
  })

return (
<div>
  <h1>Directors Page</h1>
  {renderActors}
</div>
);
}

export default Directors;
