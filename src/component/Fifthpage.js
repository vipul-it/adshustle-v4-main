import React from "react";

import "./Fifthpage.css";

import FeaturedData from "../helper/FeatureData";

const Fifthpage = () => {
  return (
    <>
      <div className="fifthpage">
        <div className="top-heading">
          <p className="text-capitalize custom_font_42">
            Our strategy is <span>focused on reaching high-potential</span>{" "}
            users first to drive the best possible <span>ROI</span>.
          </p>
        </div>

        {/* Hustle Sologan */}

        <div className="hustle-solo">
          <div className="hustle-sologan">
            <div className="letter">
              <h1>H</h1>
              <div className="letter-desc" id="h">
                <h5>High-Impact</h5>
                <p>
                  ad creatives to capture user attention and drive engagement.
                </p>
              </div>
            </div>
            <div className="letter">
              <h1>U</h1>
              <div className="letter-desc" id="u">
                <h5>User acquisition</h5>
                <p>strategies for targeted and cost-effective growth</p>
              </div>
            </div>
            <div className="letter">
              <div className="letter-desc" id="s">
                <h5>Smart app</h5>
                <p>
                  store optimization for improved app discoverability and
                  visibility
                </p>
              </div>
              <h1>S</h1>
            </div>
            <div className="letter">
              <h1>T</h1>
              <div className="letter-desc" id="t">
                <h5>Trackable & measurable</h5>
                <p>KPIs for performance monitoring and optimization</p>
              </div>
            </div>
            <div className="letter">
              <h1>L</h1>
              <div className="letter-desc" id="l">
                <h5>Localization of marketing</h5>
                <p>campaigns for increased relevance and engagement</p>
              </div>
            </div>
            <div className="letter">
              <div className="letter-desc" id="e">
                <h5>Expertise in mobile</h5>
                <p>
                  analytics and data-driven <br></br> decision-making for
                  improved performance.
                </p>
              </div>
              <h1>E</h1>
            </div>
          </div>
        </div>

        {/* Featured Card */}

        <div className="featured-card">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 f-card">
            {FeaturedData.map((value, key) => (
              <div className="col-md card" key={key}>
                <div className="img ">
                  <img src={value.logo} alt="" />
                </div>
                <div className="title d-flex justify-content-center">
                  <p className="">{value.title}</p>
                </div>
                <div className="desc d-flex justify-content-center">
                  <p>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthpage;
