import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../api"; // Implement this function

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await fetchMovieById(id); // Implement this function
        setMovieDetails(data);
      } catch (error) {
        // Handle API error here
        console.error("Error fetching movie details:", error);
      }
    }

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">
        Release Date: {movieDetails.release_date}
      </p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
