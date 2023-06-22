import React from "react";
import "./header.css";
import sushi1 from "../../assets/sushi-1.png";
import play from "../../assets/play-circle.svg";
import user from "../../assets/user.png";

const Header = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={sushi1} alt="sishi-1" data-aos="fade-up" />
        <h2 data-aos="fade-up">
          日 <br /> 本 <br /> 食
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content__info" data-aos="fade-left">
          <h1>Feel the taste of Japanese foods</h1>
          <p>
            Feel the taste of most populars Japanese foods from anywhere and
            anytime.
          </p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">Order Now</button>
            <button className="hero-content__play-button">
              <img style={{ cursor: "pointer" }} src={play} alt="play" />
              How to Order
            </button>
          </div>
        </div>

        <div className="hero-content__testimonial">
          <div className="hero-content__customer" data-aos="fade-left">
            <h4>
              24 <span>K+</span>
            </h4>
            <p>Happy Customer</p>
          </div>

          <div className="hero-content__review" data-aos="fade-left">
            <img src={user} alt="user" />
            <p>
              “This is the best Japanese food delivery service that ever exist”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
