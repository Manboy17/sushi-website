import React from "react";
import "./offers.css";

const Offers = ({ servicesRef }) => {
  return (
    <section className="offers" ref={servicesRef}>
      <h2 className="offers__title" data-aos="flip-down">
        Get offers straight to your inbox
      </h2>
      <p className="offers__description" data-aos="fade-up">
        Sign up for the Sushiman newsletter.
      </p>
      <form className="offers__subscription" data-aos="fade-up">
        <input type="email" placeholder="Enter email address" required />
        <button>Get Started</button>
      </form>
    </section>
  );
};

export default Offers;
