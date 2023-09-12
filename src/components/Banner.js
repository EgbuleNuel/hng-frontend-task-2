import React from "react";
import Navbar from "./Navbar";
import "./Banner.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div>
        <h3>John Wick 3: Parabellum</h3>
        <div className="imdb-ratings">
          <img src="../assets/imdb.js" alt="" />
          <p>86.0/100</p>
        </div>
        <div className="rot-ratings">
          <img src="../assets/rotten-tomatoes.js" alt="" />
          <p>97%</p>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <a href="#" className="watch-trailer">
          <AiFillPlayCircle className="play-btn" />
          WATCH TRAILER
        </a>
      </div>
    </div>
  );
};

export default Banner;
