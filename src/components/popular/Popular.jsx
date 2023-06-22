import React, { useState } from "react";
import "./popular.css";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/popular2.png";
import popular3 from "../../assets/popular3.png";
import popular4 from "../../assets/popular4.png";
import array from "../../assets/arrow-right.png";
import catalogue1 from "../../assets/catalogue1.png";
import catalogue2 from "../../assets/catalogue2.png";
import catalogue3 from "../../assets/catalogue3.png";
import star from "../../assets/star.png";

const filters = [
  {
    id: 1,
    image: popular1,
    text: "Sushi",
  },
  {
    id: 2,
    image: popular2,
    text: "Ramen",
  },
  {
    id: 3,
    image: popular3,
    text: "Udon",
  },
  {
    id: 4,
    image: popular4,
    text: "Danggo",
  },
  {
    id: 5,
    text: "Others",
  },
];

const catalogue = [
  {
    id: 1,
    image: catalogue1,
    title: "Chezu Sushi",
    rating: 4.7,
    price: 16,
  },
  {
    id: 2,
    image: catalogue2,
    title: "Originale Sushi",
    rating: 4.8,
    price: 21,
    class: true,
  },
  {
    id: 3,
    image: catalogue3,
    title: "Ramen Legendo",
    rating: 4.7,
    price: 16,
  },
];

const Popular = ({ menuRef }) => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id === active ? null : id);
  };

  return (
    <section className="popular" ref={menuRef}>
      <h1 className="popular__title">Popular Foods / 人気 </h1>
      <div
        className="popular__filters sushi__hide-scrollbar"
        data-aos="zoom-in"
      >
        <button className="popular__filters-btn active">All</button>
        {filters.map((filter) => (
          <button
            className={`popular__filters-btn ${
              filter.id === active ? "active" : ""
            }`}
            onClick={() => handleActive(filter.id)}
            key={filter.id}
          >
            <img src={filter.image} alt={filter.image} />
            {filter.text}
          </button>
        ))}
      </div>

      <div className="popular__catalogue" data-aos="zoom-in">
        {catalogue.map((c) => (
          <div
            className={`popular__caralogue-card ${c.class ? "selected" : ""}`}
            key={c.id}
          >
            <img src={c.image} alt={c.image} />
            <h4 className="popular__catalogue-card--title">{c.title}</h4>
            <div className="popular__catalogue-card--info">
              <div className="popular__catalogue-card--rating">
                <img
                  src={star}
                  alt={star}
                  style={{
                    height: "20px",
                    width: "20px",
                    objectFit: "contain",
                  }}
                />
                {c.rating}
              </div>
              <p className="popular__catalogue-card--price">$ {c.price}.00</p>
            </div>
          </div>
        ))}
      </div>
      <button className="popular__button" data-aos="zoom-in">
        Explore Foods
        <img src={array} alt={array} />
      </button>
    </section>
  );
};

export default Popular;
