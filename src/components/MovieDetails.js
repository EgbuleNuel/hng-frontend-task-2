import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import { fetchMovieGenres } from "../api";
import Sidebar from "./Sidebar";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c07bc06b8f15e84970110746b2cbb76e&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="det-content">
      <Sidebar />
      <div className="movie-details">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-info">
          <h1 data-testid="movie-title">{movie.title}</h1>
          <p data-testid="movie-release-date">
            Release Date (UTC): {movie.release_date}
          </p>
          <p>PG Rating: {movie.pg_rating}</p>
          <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
          {/* <p>Genre: {movie.genres.join(", ")}</p> */}
          <p data-testid="movie-overview">{movie.overview}</p>
          <p>Director: {movie.director}</p>
          {/* <p>Writers: {movie.writers.join(", ")}</p>
          <p>Stars: {movie.stars.join(", ")}</p> */}
          <p>Top Rated Ranking: {movie.topRatedRanking}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
