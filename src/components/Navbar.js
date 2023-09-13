import React from "react";
import Search from "./Search";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineVideoCamera } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="/" className="nav">
            {" "}
            <AiOutlineVideoCamera size={25} />
          </a>
          <h4>MovieBox</h4>
        </div>
        <div className="center">
          <Search />
        </div>
        <div className="right">
          <h5>Sign In</h5>
          <a href="/" className="nav">
            <AiOutlineMenu size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
