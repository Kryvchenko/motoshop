import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-sm-2"></div> */}
            <div className="col-xs-12 col-sm-6">
              {" "}
              <div className="about-container">
                <img src="/images/paul.jpeg" alt="" className="about-img" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="about-container">
                {" "}
                <h4>A FEW WORDS ABOUT US</h4>
                <h2>#1 MOTORBIKE SHOP </h2>
                <p>
                  We’re a family of like-minded and high-spirited people. We
                  come together daily to inspire, challenge, and motivate each
                  other to do more and become more.
                </p>
                <Link to="/about" rel="noopener">
                  <button className="about-btn">LEARN MORE</button>
                </Link>
              </div>
            </div>
            {/* <div className="col-xs-12 col-sm-2"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
