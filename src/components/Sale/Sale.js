import React from "react";
import "./Sale.css";

export const Sale = () => {
  return (
    <>
      <div className="sale">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <center>
                <h1 className="sale-title">PROMOTIONS</h1>
              </center>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="sale-content">
                <h2>RIDE AWAY PRICES</h2>
                <div className="discount-container">
                  <p className="sale-off">20</p>
                  <div className="discount">
                    <p>%</p>
                    <p>OFF</p>
                  </div>
                </div>
                <div className="bottom-content">
                  <h4>GPX Demon summer sale</h4>
                  <p>Some description about promo</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="sale-content">
                <h2>2018 YEARS MODELS</h2>
                <div className="discount-container">
                  <p className="sale-off">500</p>
                  <div className="discount">
                    <p>$</p>
                    <p>OFF</p>
                  </div>
                </div>
                <div className="bottom-content">
                  <h4>Kymco, GPX</h4>
                  <p>Plus 1 year warranty</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="sale-content">
                <h2>2018 YEARS MODELS</h2>
                <div className="discount-container">
                  <p className="sale-off">500</p>
                  <div className="discount">
                    <p>$</p>
                    <p>OFF</p>
                  </div>
                </div>
                <div className="bottom-content">
                  <h4>Kymco, GPX</h4>
                  <p>Plus 1 year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
