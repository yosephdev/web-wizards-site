import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Uncomment if you have a corresponding CSS file

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="header d-lg-flex justify-content-between align-items-center">
          <div className="header-agile">
            <h1>
              <Link to="/" className="navbar-brand logo">
                WebWizards{" "}
                <span className="fa fa-user-secret" aria-hidden="true"></span>
              </Link>
            </h1>
          </div>
          <div className="nav_w3ls">
            <nav>
              <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                <span className="fa fa-bars" aria-hidden="true"></span>
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu">
                <li className="mr-lg-3 mr-2 active">
                  <Link to="/">Home</Link>
                </li>
                <li className="mr-lg-3 mr-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="mr-lg-3 mr-2">
                  <Link to="/services">Services</Link>
                </li>
                <li className="mr-lg-3 mr-2">
                  <Link to="/gallery">Portfolio</Link>
                </li>
                <li className="mr-lg-3 mr-2">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
