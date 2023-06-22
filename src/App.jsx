import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popular/Popular";
import Trending from "./components/trending/Trending";
import AOS from "aos";
import "aos/dist/aos.css";
import Offers from "./components/offers/Offers";
import Footer from "./components/footer/Footer";

function App() {
  AOS.init({
    duration: 1000,
    offset: 100,
  });

  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const foodsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  function menuRefScroll() {
    menuRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  }

  function foodsRefScroll() {
    foodsRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  }

  function servicesRefScroll() {
    servicesRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  }

  function aboutRefScroll() {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  }

  const handleClick = (link) => {
    if (link === "Menu") menuRefScroll();
    if (link === "Foods") foodsRefScroll();
    if (link === "Services") servicesRefScroll();
    if (link === "About Us") aboutRefScroll();
  };

  return (
    <div className="app">
      <Navbar handleClick={handleClick} toggle={toggle} setToggle={setToggle} />
      <Header />
      <About aboutRef={aboutRef} />
      <Popular menuRef={menuRef} />
      <Trending foodsRef={foodsRef} />
      <Offers servicesRef={servicesRef} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
