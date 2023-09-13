import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopMovies } from "../api";
import "./Home.css";
import { AiOutlineRight } from "react-icons/ai";
import Banner from "./Banner";

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchTop10Movies() {
      try {
        const data = await fetchTopMovies();
        setTopMovies(data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }

    fetchTop10Movies();
  }, []);

  return (
    <div>
      <Banner />
      <div className="content">
        <div className="content-top">
          <h1>Featured Movies</h1>
          <a href="/" className="see-more">
            See More <AiOutlineRight />
          </a>
        </div>
        <div className="movie-card-list">
          {topMovies.map((movie) => (
            <Link
              to={`/MovieDetails/${movie.id}`}
              key={movie.id}
              className="movie-card"
              data-testid="movie-card"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <p
                data-testid="movie-release-date"
                className="movie-release-date"
              >
                {movie.release_date}
              </p>
              <br />
              <h3 data-testid="movie-title">{movie.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
