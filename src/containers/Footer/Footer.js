import React from "react";
import "./Footer.css";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              {" "}
              <div className="footer-content">
                <h2 className="footer-title">OPENING HOURS</h2>
                <div className="footer-open-hours">
                  <div>
                    <p>Monday - Friday</p>
                  </div>
                  <div>9am - 5.30pm</div>
                </div>
                <div className="footer-open-hours">
                  <div>
                    <p>Saturday</p>
                  </div>
                  <div>10am - 2pm</div>
                </div>
                <div className="footer-open-hours">
                  <div>
                    <p>Sunday</p>
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              {" "}
              <div className="footer-content">
                <h2 className="footer-title">ADDRESS</h2>
                <p>49 Serpentine Rd, Hamilton HM 09, Bermuda</p>
                <p>Phone: +1 441-295-0003</p>
                <p>Email: info@cyclecare.bm</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="footer-content">
                <img
                  src="images/logofinal.png"
                  alt=""
                  className="footer-logo"
                />
                <p className="footer-text">
                  For 25+ years, Cycle Care Ltd. has been and continues to be
                  the proud provider of Nolan brand helmets to Bermudians.{" "}
                </p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/cyclecareltdbda"
                    rel="noopener"
                  >
                    <TiSocialFacebook />
                  </a>
                  <a
                    href="https://instagram.com/cyclecarebermuda?igshid=YmMyMTA2M2Y="
                    rel="noopener"
                  >
                    <TiSocialInstagram />
                  </a>
                </div>
                <p className="rights">
                  Made by KRYO Studio ?? 2022. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
