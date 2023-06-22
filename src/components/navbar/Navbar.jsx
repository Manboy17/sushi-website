import React, { useEffect, useRef, useState } from "react";
import search from "../../assets/search.svg";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const links = ["Menu", "Foods", "Services", "About Us"];

const Navbar = ({ toggle, setToggle, handleClick }) => {
  const toggleRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setToggle]);

  return (
    <div className="nav">
      <div className="nav__logo">
        <h4 data-aos="fade-down">Sushiman</h4>
        <div className="nav__logo-overlay"></div>
      </div>

      <ul ref={toggleRef} className={`nav__menu ${toggle ? "active" : ""}`}>
        {links.map((link, i) => (
          <li onClick={() => handleClick(link)} key={i}>
            {link}
          </li>
        ))}
      </ul>

      <div className="nav__menu-mobile" onClick={() => setToggle(true)}>
        <RxHamburgerMenu className="burger" size={27} />
      </div>
    </div>
  );
};

export default Navbar;
