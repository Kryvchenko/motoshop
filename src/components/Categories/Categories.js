import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
  return (
    <>
      <section className="categories">
        <div className="container-big">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <Link to="/bikes" style={{ textDecoration: "none" }}>
                {" "}
                <div className="category black">
                  <h4>OUR BIKES</h4>
                  <span className="category-span"></span>
                  <h2>BIKES</h2>
                  <p>Request a free test drive of futuristic Kymco People S</p>
                </div>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4">
              <Link to="/helmets" style={{ textDecoration: "none" }}>
                <div className="category dark-gray">
                  <h4>OUR HELMETS</h4>
                  <span className="category-span"></span>
                  <h2>HELMETS</h2>
                  <p>Have you heard about super Nolan promo?</p>
                </div>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4">
              <Link to="/service" style={{ textDecoration: "none" }}>
                <div className="category gray">
                  <h4>OUR SERVICE</h4>
                  <span className="category-span"></span>
                  <h2>SERVICE</h2>
                  <p>Our senior mechanic Alan will take care of you motor </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
