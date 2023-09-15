import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";
import Sidebar from "./Sidebar";
import { SlList } from "react-icons/sl";
import { IoTicketOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Footer from "./Footer";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovieDetails] = useState(null);
  const [iconColor, setIconColor] = useState("#efb6bf");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1dad62d1adbd8506d1f8da2cb3c91d1d&language=en-US`
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

  const changeColorOnClick = () => {
    const newColor = iconColor === "#efb6bf" ? "#be123c" : "#efb6bf";
    setIconColor(newColor);
  };

  return (
    <div className="det-content">
      <Sidebar />
      <div className="movie-details">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <div className="movie-info">
            <div className="title">
              <h2 data-testid="movie-title">{movie.title}</h2>
              <FaHeart
                style={{ color: iconColor }}
                className="fav-btn"
                title="Add to Favourites"
                onClick={changeColorOnClick}
                size={25}
              />
            </div>
            <div className="content-body">
              <div className="content-para">
                <p data-testid="movie-release-date">
                  Release Date (UTC): {movie.release_date}
                </p>
                <p data-testid="movie-runtime">
                  Runtime: {movie.runtime} minutes
                </p>
                <p data-testid="movie-overview">{movie.overview}</p>
              </div>

              <div className="more">
                <a href="/" className="see-show">
                  <IoTicketOutline size={20} /> See Showtimes
                </a>
                <a href="/" className="more-options">
                  <SlList size={15} /> More Watch Options
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MovieDetails;
