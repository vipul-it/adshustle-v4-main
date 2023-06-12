import React from 'react'
import "./SecondP.css"
import ContactUs from './ContactUs'

const SecondP = () => {
  return (
    <div className='second-page'>
        {/* second page start */}
        <div className="sec-page" >
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 sec-cards">
                    <div className="col-md sec-card-f">
                        <p id='discover'>What do we do<span>?</span></p>
                    </div>
                    <div className="col-md sec-card">
                        <div className="head">
                            <h3>Performance</h3>
                        </div>
                        <div className="desc">
                            <p className="text-white" id="desc-text">Our team collaborates closely with
                                advertisers and publishers to craft compelling
                                campaign pitches. By using dynamic
                                optimization campaigns, we ensure that the
                                right audience is reached at the right time,
                                resulting in the best ROAS.</p>
                        </div>
                    </div>
                    <div className="col-md sec-card">
                        <div className="head">
                            <h3>Marketing</h3>
                        </div>
                        <div className="desc">
                            <p id="desc-text" className="text-black my-text">With the support of our engaged
                                global supply partners, advertisers
                                can concentrate on achieving their
                                essential KPIs (Key Performance
                                Indicators) and connect with their
                                most valuable customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* second page end */}
        {/* third page start */}
        <div className="third-page" >
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 third-cards">
                    <div className="col-md third-card">
                        <p className="text-white">Take your Mobile App to <br></br>
                            <span>New Heights</span> with Us</p>
                    </div>
                    <div className="col-md third-card">
                        <p id="third-text">Our proficiency in performance marketing, combined with our data-driven approach and utilization of cutting-edge tools and techniques, will enable you to accomplish your marketing objectives and optimize your ROI</p>
                    </div>
                </div>
            </div>
        {/* third page end */}
        {/* fourth page start */}
        <div className="hero-wrapper fourth-page">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
            <div class="slide">
              <p>Optimize</p>
            </div>
            <div class="slide">
              <p>Achieve</p>
            </div>
            <div class="slide">
              <p>Strategize</p>
            </div>
          </div>
        </div>
        <div className="wrapper-sec">
          <div className="">
            <p
              type="button"
              className=" align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Let's Talk
            </p>
           
          </div>
          <ContactUs />
        </div>
      </div>
        {/* fourth page end */}
    </div>
  )
}

export default SecondP