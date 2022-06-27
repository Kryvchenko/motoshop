import React from "react";
import "./Service.css";
import pdf from "./check-in-form.pdf";
import { Typewriter } from "react-simple-typewriter";

export const Service = () => {
  return (
    <>
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {" "}
              <center>
                {" "}
                <h1 className="services-title" style={{ color: "#ff4b52" }}>
                  S
                  <span style={{ color: "black" }}>
                    <Typewriter
                      loop={1}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={["ERVICES"]}
                    />
                  </span>
                </h1>
              </center>
            </div>
            <div className="col-sm-12 col-sm-6">
              <div className="service-img-div">
                <img
                  src="/images/service.jpeg"
                  className="service-img"
                  alt=""
                />
                <div className="quality-div">
                  <img
                    src="/images/nolan/1972_nolan.png"
                    className="quality-img"
                    alt=""
                  />
                  <img
                    src="/images/nolan/grex_r1_c1.png"
                    className="quality-img"
                    alt=""
                  />
                  <img
                    src="/images/nolan/nolan_r1_c1.png"
                    className="quality-img"
                    alt=""
                  />
                  <img
                    src="/images/nolan/policarbonate.png"
                    className="quality-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-sm-6">
              <div className="service-content">
                <h3 className="servise-title-text">
                  Cycle Care Ltd. offers a variety of specialty services for
                  your bike*, all from our convenient location in the heart of
                  Hamilton city. We do general service on all makes and models
                  of scooters and motorcycles. Including tcd prep, pass,
                  license, tire, and oil change. Same day service. Call, email,
                  or visit our showroom to schedule an appointment today!
                </h3>
                <p className="service-text">
                  - fresh oil for your ride Our mechanic will change your oil,
                  giving your bike a smooth ride.
                </p>
                <p className="service-text">
                  - inspection and advisory Our mechanic will fully inspect your
                  bike, and will advise on all necessary services for your bike.
                </p>
                <p className="service-text">
                  - 25-point checkup Our mechanic will fully inspect your bike,
                  and will perform all necessary services for your bike to feel
                  as good as new.
                </p>

                <h3 className="service-text">Book now 295-0003</h3>
                <h3 className="service-text">
                  Or{" "}
                  <a href={pdf} download="FileName.pdf">
                    Download
                  </a>{" "}
                  "Check-in" form and send us it via email: info@cyclecare.bm
                </h3>
                <p className="service-note-text">
                  *Please note: While we offer services for any bike, Cycle Care
                  Ltd. cannot offer repairs for any bikes outside of our
                  flagship brands (Kymco + GPX). If we find a repair is
                  necessary, will always advise on what repairs you may need,
                  and where to get them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
