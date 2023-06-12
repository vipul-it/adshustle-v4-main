import React, { useState } from "react";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../assets/navbar/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg header">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
        <div
          className={
            showMediaIcon
              ? "collapse navbar-collapse justify-content-end mobile-device"
              : "collapse navbar-collapse justify-content-end"
          }
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link text-white"
                to="discover"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                About
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                className="nav-link text-white"
                to="spec"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                Specialities
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                className="nav-link text-white"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <Link
            
            className="text-black hamburger-icon"
            onClick={(e) => {
              e.preventDefault();
              setShowMediaIcon(!showMediaIcon);
            }}
          >
            <GiHamburgerMenu size="1.7rem" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
