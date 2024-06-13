import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/service/ALXTRIPLOGO.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbarlaxman">
        <Link to="/Car" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/Car" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/car-rental/available-cars"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/package-sidebar"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Tour Package
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/car-rental/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
