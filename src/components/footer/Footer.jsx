import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const links = ["Menu", "Foods", "Services", "About Us"];

const Footer = ({ handleClick }) => {
  return (
    <footer className="footer">
      <span className="footer__logo" data-aos="fade-up">
        <img src={logo} alt={logo} />
      </span>

      <ul className="footer__menu" data-aos="fade-up">
        {links.map((link, i) => (
          <li onClick={() => handleClick(link)} key={i}>
            {link}
          </li>
        ))}
      </ul>

      <ul className="footer__media" data-aos="fade-up">
        <li>
          <img src={facebook} alt={facebook} />
        </li>
        <li>
          <img src={twitter} alt={twitter} />
        </li>
        <li>
          <img src={instagram} alt={instagram} />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
