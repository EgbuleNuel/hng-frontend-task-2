import React from "react";
import Navbar from "./Navbar";
import "./Banner.css";
import imdb from "../assets/imdb.png";
import rott from "../assets/rotten_tomatoes.png";
import { AiFillPlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="details">
        <h1>John Wick 3: Parabellum</h1>
        <div className="rating">
          <div className="imdb-ratings">
            <img src={imdb} alt="" />
            <p>86.0/100</p>
          </div>
          <div className="rot-ratings">
            <img src={rott} alt="" />
            <p>97%</p>
          </div>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>{" "}
        <br />
        <br />
        <a href="/" className="watch-trailer">
          <AiFillPlayCircle className="play-btn" />
          WATCH TRAILER
        </a>
      </div>
    </div>
  );
};

export default Banner;
