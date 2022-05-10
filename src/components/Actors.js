import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = actors.map(movie => {
    const {name, movies} = movie
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
  <h1>Actors Page</h1>
  {renderActors}
</div>
);
}

export default Actors;
