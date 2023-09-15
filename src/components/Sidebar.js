import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { SlScreenDesktop, SlCalender, SlLogout } from "react-icons/sl";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-div">
        <a href="/" className="logo">
          {" "}
          <AiOutlineVideoCamera size={25} className="icon" />
        </a>
        <h4>MovieBox</h4>
      </div>
      <Link to="/" className="sidebar-link">
        <div className="link">
          <GoHome size={20} className="icon"  /> Home
        </div>
      </Link>
      <Link to="/" className="sidebar-link">
        <span id="sidebar-link-sel" className="link">
          <BiCameraMovie size={20} className="icon"  /> Movies
        </span>
      </Link>
      <Link to="/" className="sidebar-link">
        <div className="link">
          <SlScreenDesktop size={20} className="icon" /> TV Series
        </div>
      </Link>
      <Link to="/" className="sidebar-link">
        <div className="link">
          <SlCalender size={20}className="icon"  /> Upcoming
        </div>
      </Link>
      <div className="start-playing">
        <h6>Play movie quizes and earn free tickets</h6>
        <p className="start-playing-text">50k people are playing now</p>
        <p className="start-play">Start Playing</p>
      </div>
      <Link to="/" className="sidebar-link">
        <div className="link">
          <SlLogout size={20}className="icon"  /> Log Out
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
