import React from "react";
import "./Landingpage.css";
import Homepage from "./Homepage";

import Fifthpage from "./Fifthpage";

import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import SecondP from "./SecondP";
import FourthP from "./FourthP";
import SeventhP from "./SeventhP";
import EighthP from "./EighthP";

const landingpage = () => {
  return (
    <div className="">
      <div className="child-section-main">
        <Navbar />
        <Homepage />
      </div>
      <div className="child-section-main">
        <SecondP />
      </div>

      <div className="child-section-main">
        <Fifthpage />
      </div>
      <div className="child-section-main">
        <FourthP />
      </div>
      <div className="child-section-main">
        <AboutUs />
      </div>
      <div className="child-section-main">
        <SeventhP />
      </div>
      <div className="child-section-main">
        <EighthP />
      </div>
    </div>
  );
};

export default landingpage;
