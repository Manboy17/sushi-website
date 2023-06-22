import React from "react";
import "./trending.css";
import check from "../../assets/check.png";
import trending1 from "../../assets/trending_1.png";
import trending2 from "../../assets/trending_2.png";
import arrowVertical from "../../assets/arrow-vertical.svg";
import arrowHorizontal from "../../assets/arrow-horizontal.svg";

const list = [
  {
    id: 1,
    image: check,
    text: "Maki Sushi",
  },
  {
    id: 2,
    image: check,
    text: "Nigiri Sushi",
  },
  {
    id: 3,
    image: check,
    text: "Oshizushi",
  },
  {
    id: 4,
    image: check,
    text: "Temaki Sushi",
  },
  {
    id: 5,
    image: check,
    text: "Uramaki Sushi",
  },
  {
    id: 6,
    image: check,
    text: "Inari Sushi",
  },
];

const drinks = [
  {
    id: 1,
    image: check,
    text: "Oruncha",
  },
  {
    id: 2,
    image: check,
    text: "Ofukucha",
  },
  {
    id: 3,
    image: check,
    text: "Sakura Tea",
  },
  {
    id: 4,
    image: check,
    text: "Kombu-cha",
  },
  {
    id: 5,
    image: check,
    text: "Aojiru",
  },
  {
    id: 6,
    image: check,
    text: "Mugicha",
  },
];

const Trending = ({ foodsRef }) => {
  return (
    <section className="trending" ref={foodsRef}>
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="subtitle">What’s Trending / トレンド</p>
          <h3 className="title">Japanese Sushi</h3>
          <p className="description">
            Feel the taste of most delicious Sushi here.
          </p>

          <ul
            className="trending__list"
            style={{ marginTop: "36px", marginBottom: "50px" }}
          >
            {list.map((l) => (
              <li key={l.id}>
                <img src={l.image} alt={l.image} />
                <p>{l.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="trending__image trending__bg-sushi"
          data-aos="fade-left"
        >
          <img src={trending1} alt={trending1} />

          <div className="trending__arrow trending__arrow-left">
            <img src={arrowVertical} alt={arrowVertical} />
          </div>

          <div className="trending__arrow trending__arrow-bottom">
            <img src={arrowHorizontal} alt={arrowHorizontal} />
          </div>
        </div>
      </section>

      <div className="trending__discover">
        <p data-aos="zoom-in-down">Discover</p>
      </div>

      <section className="trending-drinks">
        <div
          className="trending__image trending__bg-drinks"
          data-aos="fade-right"
        >
          <img src={trending2} alt={trending2} />

          <div className="trending__arrow trending__arrow-right">
            <img src={arrowVertical} alt={arrowVertical} />
          </div>

          <div className="trending__arrow trending__arrow-top">
            <img src={arrowHorizontal} alt={arrowHorizontal} />
          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          <p className="subtitle">What’s Trending / トレンド</p>
          <h3 className="title">Japanese Sushi</h3>
          <p className="description">
            Feel the taste of most delicious Sushi here.
          </p>

          <ul
            className="trending__list"
            style={{ marginTop: "36px", marginBottom: "50px" }}
          >
            {drinks.map((drink) => (
              <li key={drink.id}>
                <img src={drink.image} alt={drink.image} />
                <p>{drink.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};
export default Trending;
