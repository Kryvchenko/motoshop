import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Categories } from "../../components/Categories/Categories";
import { Sale } from "../../components/Sale/Sale";
import { About } from "../../components/About/About";
import { Features } from "../../components/Features/Features";
import Maphome from "../../components/Map/Maphome";
import { Form } from "../../components/Form/Form";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Home = () => {
  const { text } = useTypewriter({
    words: ["A BIKE?", "SERVICE? ", "A HELMET?", "SPARE PARTS?"],
    loop: 0,
  });

  return (
    <>
      <section className="hero-section">
        <video src="/videos/front-street.mp4" autoPlay loop muted />
        <div className="hero-content">
          {" "}
          <center>
            <h1
              className="hero-title"
              style={{
                color: "#ff4b52",
                fontWeight: "bolder",
              }}
            >
              NEED{" "}
              <span
                style={{
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                {text}
                <Cursor />
              </span>
            </h1>
          </center>
          <NavLink to="/shop" rel="noopener">
            <button className="hero-btn">SHOP NOW</button>
          </NavLink>
        </div>
      </section>
      <Sale />
      <Categories />
      <About />
      <Features />
      <Maphome />
      <Form />
    </>
  );
};
