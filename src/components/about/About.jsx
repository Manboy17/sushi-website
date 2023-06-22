import React from "react";
import "./about.css";
import sushi2 from "../../assets/sushi-2.png";
import sushi3 from "../../assets/sushi-3.png";
import arr from "../../assets/arrow-up-right.png";

const About = ({ aboutRef }) => {
  return (
    <section className="about" ref={aboutRef}>
      <div className="about__image">
        <div className="about__image-sushi3">
          <img src={sushi3} alt="sushi3" data-aos="fade-right" />
        </div>

        <button className="about__button">
          Learn More
          <img src={arr} alt="arr" />
        </button>

        <div className="about__image-sushi2">
          <img src={sushi2} alt="sushi2" data-aos="fade-right" />
        </div>
      </div>

      <div className="about__content" data-aos="fade-left">
        <p className="subtitle">About Us / 私たちに関しては</p>
        <h1 className="title">
          Our mission is to bring true Japanese flavours to you.
        </h1>
        <p className="description">
          We will continue to provide the experience of Omotenashi, the Japanese
          mindset of hospitality, with our shopping and dining for our
          customers.
        </p>
      </div>
    </section>
  );
};

export default About;
