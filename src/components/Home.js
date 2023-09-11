import React, { useEffect, useState } from "react";
import { fetchTopMovies } from "../api"; // Implement this function

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchTop10Movies() {
      try {
        const data = await fetchTopMovies(); // Implement this function
        setTopMovies(data.results);
      } catch (error) {
        // Handle API error here
        console.error("Error fetching top movies:", error);
      }
    }

    fetchTop10Movies();
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-list">
        {topMovies.map((movie) => (
          <div key={movie.id} className="movie-card" data-testid="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              data-testid="movie-poster"
            />
            <h2 data-testid="movie-title">{movie.title}</h2>
            <p data-testid="movie-release-date">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
