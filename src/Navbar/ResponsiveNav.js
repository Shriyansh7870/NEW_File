import React from "react";
import { Link } from "react-router-dom";

const ResoponsiveNav = () => {
  return (
    <nav className="Resopnsivenavbar">
      <div className="Responsivelogo">
        <p> Awesome Website</p>
      </div>
      <ul className="Designul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/electroic">Electronic</Link>
        </li>
        <li>
          <Link to="/clothes">Clothes</Link>
        </li>
        <li>
          <Link to="/grocerry">Grocerry</Link>
        </li>
        <li>
          <Link to="/laptop">Laptop</Link>
        </li>
        <li>
          <Link to="/mobile">Mobile</Link>
        </li>
      </ul>
      <div className="searchbar">
        <div className="searchbar-input">
          <input className="searchinput" type="text" placeholder="Search..." />
          <button className="button-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav-icons">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
    </nav>
  );
};

export default ResoponsiveNav;
