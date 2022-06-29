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
                  <h4 className="sale-description">GPX Demon summer sale</h4>
                  <p>Some description about promo</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="sale-content">
                <h2>2021 YEARS MODELS</h2>
                <div className="discount-container">
                  <p className="sale-off">299</p>
                  <div className="discount">
                    <p>$</p>
                    <p>OFF</p>
                  </div>
                </div>
                <div className="bottom-content">
                  <h4 className="sale-description">Kymco, GPX</h4>
                  <p>Plus 1 year warranty</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="sale-content">
                <h2>NOLAN TRADE-IN</h2>
                <div className="discount-container">
                  <p className="sale-off">UP TO 100</p>
                  <div className="discount">
                    <p>$</p>
                    <p>OFF</p>
                  </div>
                </div>
                <div className="bottom-content">
                  <h4 className="sale-description">Nolan, Grex, X-Lite</h4>
                  <p>Change your old helmet to the new one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
