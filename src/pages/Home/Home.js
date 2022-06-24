import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Categories } from "../../components/Categories/Categories";
import { Sale } from "../../components/Sale/Sale";
import { About } from "../../components/About/About";
import { Features } from "../../components/Features/Features";
import Maphome from "../../components/Map/Maphome";
import { Form } from "../../components/Form/Form";

export const Home = () => {
  return (
    <>
      <section className="hero-section">
        <video src="/videos/front-street.mp4" autoPlay loop muted />
        <div className="hero-content">
          {" "}
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
