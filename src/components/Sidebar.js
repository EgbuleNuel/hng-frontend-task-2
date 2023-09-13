import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">
        Home
      </Link>
      <Link to="/">
        <span className="sidebar-link-sel">Movies</span>
      </Link>
      <Link to="/" className="sidebar-link">
        TV Series
      </Link>
      <Link to="/" className="sidebar-link">
        Upcoming
      </Link>
      <Link to="/" className="sidebar-link">
        Log Out
      </Link>
    </div>
  );
}

export default Sidebar;
