import React, { useState } from "react";
import { searchMovies } from "../api"; // Implement this function

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const data = await searchMovies(query); // Implement this function
      setSearchResults(data.results);
    } catch (error) {
      // Handle API error here
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search for Movies</h1>
      <div>
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      <div className="movie-list">
        {searchResults.map((movie) => (
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

export default Search;
