import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-100 d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-75">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            RK-Blog..
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blogs">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/add-blog">
                  Add Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/delete-blog">
                  Delete Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <NavLink
                className="btn btn-outline-success"
                to="https://abdul-r.netlify.app/"
              >
                About Me
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
