import React from "react";
import { Button, ButtonGroup } from "reactstrap";

function Header() {
  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a href="index.html"></a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/premium">
                  Premium Calculator
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="/res">
                  Register
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/login">
                  Login
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
