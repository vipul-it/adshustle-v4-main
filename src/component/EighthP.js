import React from "react";
import "./EighthP.css";
import Team from "../helper/Team";
import p1 from "../assets/ourpresence/1.jpg";
import p2 from "../assets/ourpresence/2.jpg";
import p3 from "../assets/ourpresence/3.jpg";
import p4 from "../assets/ourpresence/4.jpg";
import p5 from "../assets/ourpresence/5.jpg";
import p6 from "../assets/ourpresence/6.jpg";
import p7 from "../assets/ourpresence/7.jpg";
import p8 from "../assets/ourpresence/8.jpg";
import p9 from "../assets/ourpresence/9.jpg";

import { Link as ScrollLink } from "react-scroll";

import Logo from "../assets/footer/footer-logo.png";

import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const EighthP = () => {
  return (
    <div className="Eighth-page">
      {/* team page end  */}
      <div className="team-container team-height" id="team">
        <div className="team-heading">
          <p>
            Meet The <span>Hustlers</span>
          </p>
        </div>
        <div className="team-details">
          <div className="container team-card">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 teams">
              {Team.map((value, index) => (
                <div className="col-md team" key={index}>
                  <div className="team-img">
                    <img src={value.img} alt="" />
                  </div>
                  <div className="team-name">
                    <p className="text-black">{value.name}</p>
                  </div>
                  <div className="team-role">
                    <p className="text-black">{value.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* team page end  */}
      {/* event page start  */}
      <div className="team-container event-height">
        <div className="team-heading t-head">
          <p>
            Our <span>Presence</span>
          </p>
        </div>
        <div className="event-carousel">
          <div className="event">
            <img src={p1} alt="" />
          </div>
          <div className="event">
            <img src={p2} alt="" />
          </div>
          <div className="event">
            <img src={p3} alt="" />
          </div>
          <div className="event">
            <img src={p4} alt="" />
          </div>
          <div className="event">
            <img src={p5} alt="" />
          </div>
          <div className="event">
            <img src={p6} alt="" />
          </div>
          <div className="event">
            <img src={p7} alt="" />
          </div>
          <div className="event">
            <img src={p8} alt="" />
          </div>
          <div className="event">
            <img src={p9} alt="" />
          </div>
        </div>
      </div>
      {/* event page end  */}

      {/* footer page end  */}
      <div className="hero-footer footer-height">
        <div className="container footer-content">
          <div className="row footer">
            <div className="col left-footer">
              <div className="footer-logo">
                <img src={Logo} alt="" />
                <div className="connect">
                  <p>Let's Connect</p>
                  <div className="social-icons">
                    
                    <a
                      className=""
                      href="mailto:support@adshustle.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      
                      <AiOutlineMail />
                    </a>
                    <a
                      className=""
                      href="https://wa.me/918810535829"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineWhatsApp />
                    </a>

                    <a
                      className=""
                      href="https://www.linkedin.com/company/adshustle-pvt-ltd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col right-footer">
              <div className="footer-map">
                <iframe
                  title="map address"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28041.36093842279!2d77.391765!3d28.534606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1683868995234!5m2!1sen!2sus"
                  height="150"
                  style={{ border: "0", width: "80%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col right-footer">
              <div className="right-footer-details">
                <div className="company">
                  <p id="cmp">Our Company</p>
                  <ul>
                    <li>
                      <ScrollLink
                        className="nav-link text-white"
                        to="homepage"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={600}
                      >
                        Home
                      </ScrollLink>
                    </li>
                    <li>
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
                    <li>
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
                    <li>
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

                <div className="contact">
                  <p id="con">Contact</p>
                  <ul>
                    <li>support@adshustle.com</li>
                  </ul>
                  <p id="address">Address</p>
                  <ul>
                    <li>
                      2343, Tower B, Landcraft Golf Links Site, Ghaziabad U.P.
                      201001 India.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright ©2023 Ads Hustle. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer page end  */}
    </div>
  );
};

export default EighthP;
