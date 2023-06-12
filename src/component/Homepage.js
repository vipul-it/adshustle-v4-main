import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link as ScrollLink } from "react-scroll";

import "./Homepage.css";

import work from "../assets/homepage/images/work.jpg";
import play from "../assets/homepage/images/play.jpg";
import hustle from "../assets/homepage/images/We-hustle.jpg";

import { useNavigate } from "react-router-dom";


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img className="image_size" src={work} onDragStart={handleDragStart} role="presentation" alt="banner"/>,
  <img className="image_size" src={play} onDragStart={handleDragStart} role="presentation" alt="banner" />,
  <img className="image_size" src={hustle} onDragStart={handleDragStart} role="presentation" alt="banner" />,
];

const Homepage = () => {
  const [slideIn] = useState(false);
  const navigate = useNavigate();

  const navigateToButton = () => {
    navigate("about");
  };

  return (
    <div className="section1">
      <AliceCarousel
      animationDuration="1000"
      autoPlay="true"
      infinite="true"
      autoHeight="false"
      autoWidth="false"
      disableDotsControls="true"
      disableButtonsControls="true"
      autoPlayInterval="3000"
      mouseTracking items={items} />

      <div className="hero-page" id="homepage">
        <div className="hero-content">
          <div className="mid-content">
            <h1>We</h1>

            <div className="words">
              <span>Work</span>
              <span>Play</span>
              <span>Hustle</span>
            </div>
          </div>
          <div className={`last-content ${slideIn ? "" : "slide-in"}`}>
            <div className="word-desc">
              <p>To Boost Your APP Performance</p>
              <p>With Innovative Ideas & Creativity</p>
              <p>To Exceed All Expectations & Achieve Success</p>
            </div>
          </div>
          <div className="hero-btn">
            <div className="">
              <button
                className="fw-normal"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Let's Talk
              </button>
              
            </div>

            <button className="fw-normal" onClick={navigateToButton}>
              <ScrollLink
                className="nav-link text-white"
                to="discover"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                Discover More
              </ScrollLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
