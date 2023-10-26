import React from "react";

function Movie({ movie, onRemove }) {
  return (
    <div className="movie-card">
      <h2>Title: {movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <button onClick={() => onRemove(movie.id)}>Remove</button>
    </div>
  );
}

export default Movie;
