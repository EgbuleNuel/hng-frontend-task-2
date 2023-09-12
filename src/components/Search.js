import React, { useState } from "react";
import { searchMovies } from "../api";
import { IoSearch } from "react-icons/io5";
import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    try {
      const data = await searchMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="search-div">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">
          <IoSearch size={35} />
        </button>
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
