import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}

      <nav className="navbar">

        <div className="nav-left">
          <MenuIcon
            className="menu-icon"
            onClick={() => setOpen(true)}
          />

          <Link to="/" className="logo">CuraPredict</Link>
        </div>

        <div className="nav-right"> 
          <Link to="/login" className="nav-link">Logout</Link>
        </div>

      </nav>


      {/* DARK OVERLAY */}

      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}


      {/* SIDEBAR */}

      <div className={`sidebar ${open ? "active" : ""}`}>

        <div className="sidebar-header">

          <h2>CuraPredict</h2>

          <CloseIcon
            className="close-icon"
            onClick={() => setOpen(false)}
          />

        </div>

        <ul className="menu">

          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>

          <li>
            <Link to="/prediction" onClick={() => setOpen(false)}>Prediction</Link>
          </li>

          <li>
            <Link to="/history" onClick={() => setOpen(false)}>History</Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </li>

        </ul>

      </div>

    </>
  );
}

export default Navbar;