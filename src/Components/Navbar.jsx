import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lightImg from "./light.png"; // Path to light mode icon
import darkImg from "./dark.png"; // Path to dark mode icon
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle theme switching
    const color = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", color);
  }, [isDarkMode]);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isScrolled ? "scrolled" : ""
      } fixed-top`}
    >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/" id='store-button'>
          PICKLE STORE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"  >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">
                Order
              </Link>
            </li>
          </ul>
          <button
            id="themeswitch"
            onClick={() => setisDarkMode(!isDarkMode)}
            className="btn btn-outline-secondary"
          >
            <img
              src={isDarkMode ? darkImg : lightImg}
              alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
