import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
