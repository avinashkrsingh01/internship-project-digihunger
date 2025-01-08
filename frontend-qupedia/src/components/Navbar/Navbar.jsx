import React from "react";
import "./Navbar.css";
import { IoMdPerson } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Webdevelopment from "../Pages/WebDeveloper/Webdevelopment";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h2 className="company-name">Qupedia</h2>
        </div>
        <div className="navbars">
      <div className="dropdown">
        <select className="dropdown-select">
          <option>All Categories</option>
          <option>Video Editing</option>
          <option>Web Development</option>
          <option>2D Animations</option>
          <option>3D Animations</option>
          <option>Digital Marketing</option>
        </select>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <Link>
      <button for="" className="search-button">
        <FaSearch />
      </button>
      </Link>
    </div>
        <div className="login">
          < IoMdPerson className="login-logo" />
          <Link to="login" className="login-val">LOGIN/SIGNUP</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
