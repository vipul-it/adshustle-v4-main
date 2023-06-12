import React, { useEffect, useRef } from "react";
import "./SeventhP.css";
import Swiper from "swiper";
import "swiper/css";

import img7 from "../assets/brands/image 3.png";
import img8 from "../assets/brands/image 4.png";
import img9 from "../assets/brands/image 5.png";
import img10 from "../assets/brands/image 6.png";
import img11 from "../assets/brands/image 7.png";
import img12 from "../assets/brands/image 8.png";

import img13 from "../assets/brands/image 11.png";
import img14 from "../assets/brands/image 12.png";
import img15 from "../assets/brands/image 9.png";
import img16 from "../assets/brands/image 10.png";

import img1 from "../assets/customer/Kseniia Eliseeva- mobitopia.jpg";
import img2 from "../assets/customer/Innermobi logo.jpg";
import img4 from "../assets/customer/thinkmobilegroup - alexendra.jpg";
import img3 from "../assets/customer/accesstrade-logo.jpg";
import img5 from "../assets/customer/Atanaska Atanascheva.jpeg";
import img6 from "../assets/customer/toptraffic.jpg";

const SeventhP = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const initializeSwiper = () => {
      swiperRef.current = new Swiper(".mySwiper", {
        slidesPerView: getSlidesPerView(),
        spaceBetween: 30,
        slidesPerGroup: getSlidesPerGroup(),
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });
    };

    const getSlidesPerView = () => {
      return window.innerWidth < 800 ? 1 : 3;
    };

    const getSlidesPerGroup = () => {
      return window.innerWidth < 800 ? 1 : 3;
    };

    initializeSwiper();

    window.addEventListener("resize", handleResize);

    function handleResize() {
      if (swiperRef.current) {
        swiperRef.current.params.slidesPerView = getSlidesPerView();
        swiperRef.current.params.slidesPerGroup = getSlidesPerGroup();
        swiperRef.current.update();
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 3000); // adjust the interval (in milliseconds) as needed

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    < div className="Seventh-page">
      <div className="seventhpage">
        <div className="customer-heading">
          <p>
            Hear From Our <span>Customers</span>
          </p>
        </div>
        <section>
          <div className="swiper mySwiper container swiper-container-free-mode">
            <div className="swiper-wrapper content">
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Kseniia Eliseeva, Account Manager</p>
                    <p>Mobitopia</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “Have been working with Adshustle since November. Have
                      good communication with AM, everything solves very quick,
                      we find many mutual points to boost our profit from both
                      of sides.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img5} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Atanaska Atanaschev, Publishers Coordinator</p>
                    <p>Purify Digital Limited</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “I have worked with affiliate managers for several years,
                      but it is a different experience since the time I started
                      working with Adshustle Media Media. Wish a great success
                      through out their journey”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img6} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Viktoriya Batoeva, Manager</p>
                    <p>Top traffic</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “We are honored to work with the Ads Hustle team. They
                      respond super quickly to all requests and bring
                      high-quality results to our campanies.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Jennifer wang, Account Manager</p>
                    <p>Innermobi</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “It's a pleasure to work with Adshustle who is really
                      professional and has good performance for our campaigns”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img3} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Dung Tran, Account Manager</p>
                    <p>Accesstrade</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “We are thankful that Adshulte went out of their way each
                      month to provide extra their inventory to boost growth. We
                      appreciate them and we are looking forward to working with
                      them for many years.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Alexandra Holtti, Account Manager</p>
                    <p>Thinkmobilegroup</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “High standard and excellent quality of work. They helped
                      my business grow in digital.”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="swiper-slide card-slide">
                <div className="card-content">
                  <div className="customer-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="customer-name">
                    <p>Jennifer wang, Account Manager</p>
                    <p>Innermobi</p>
                  </div>
                  <div className="customer-message">
                    <p className="text-black">
                      “It's a pleasure to work with Adshustle who is really
                      professional and has good performance for our campaigns”
                    </p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* brand section  start*/}
      <div className="hero-brands">
        <div className="container brands">
          <p>
            Brands That <span>Trust Us</span>
          </p>
        </div>

        <div className="container brand-carousel">
          <div className="brand-img">
            <img src={img7} alt="" />
          </div>
          <div className="brand-img">
            <img src={img8} alt="" />
          </div>
          <div className="brand-img">
            <img src={img9} alt="" />
          </div>
          <div className="brand-img">
            <img src={img10} alt="" />
          </div>
          <div className="brand-img">
            <img src={img11} alt="" />
          </div>
          <div className="brand-img">
            <img src={img12} alt="" />
          </div>
          <div className="brand-img">
            <img src={img13} alt="" />
          </div>
          <div className="brand-img">
            <img src={img14} alt="" />
          </div>
          <div className="brand-img">
            <img src={img15} alt="" />
          </div>
          <div className="brand-img">
            <img src={img16} alt="" />
          </div>
          <div className="brand-img">
            <img src={img7} alt="" />
          </div>
          <div className="brand-img">
            <img src={img8} alt="" />
          </div>
          <div className="brand-img">
            <img src={img9} alt="" />
          </div>
          <div className="brand-img">
            <img src={img10} alt="" />
          </div>
          <div className="brand-img">
            <img src={img11} alt="" />
          </div>
          <div className="brand-img">
            <img src={img12} alt="" />
          </div>
          <div className="brand-img">
            <img src={img13} alt="" />
          </div>
          <div className="brand-img">
            <img src={img14} alt="" />
          </div>
          <div className="brand-img">
            <img src={img15} alt="" />
          </div>
          <div className="brand-img">
            <img src={img16} alt="" />
          </div>
        </div>
      </div>
      {/* brand section  End*/}
    </div>
  );
};

export default SeventhP;
