import React from "react";
import "./Features.css";

export const Features = () => {
  return (
    <>
      <section className="features">
        <div className="container-big">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <div className="feature returns">
                <h2>FREE RETURNS</h2>
                <p>
                  Our programs are affordably priced and available to all kinds
                  of clients.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="feature team">
                <h2>PROFESSIONAL TEAM</h2>
                <p>
                  Our coaches have years of experience in CrossFit and various
                  types of fitness.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="feature delivery">
                <h2>FREE DELIVERY</h2>
                <p>
                  Our studio is located in the downtown area and is easily
                  accessible via public transport.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="feature finance">
                <h2>FINANCE AVAILABLE</h2>
                <p>
                  We use the top-notch equipment and gear for workouts and
                  training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
