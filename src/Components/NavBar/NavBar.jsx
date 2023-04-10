import React from "react";
import matchLabs from "../../Assets/images/match_logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="header-container">
        <nav>
          <div className="logo">
            <a href="##">
              <img src={matchLabs} alt="" />
            </a>
          </div>
          <ul className="nav-items">
            <li>
              <a href="##">Blockchain</a>
            </li>
            <li>
              <a href="##">Tokens</a>
            </li>
            <li>
              <a href="##">APIs</a>
            </li>
            <li>
              <a href="##">Matchain</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
