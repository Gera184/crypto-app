import React, { useEffect } from "react";

import "./Navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <i class="fas fa-grip-lines"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-start">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/favorites">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
