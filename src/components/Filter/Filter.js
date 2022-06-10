import React from "react";
import { NavLink } from "react-router-dom";
import "./Filter.css";

export const Filter = () => {
  return (
    <>
      <div className="filter-container">
        <NavLink to="/shop">
          {" "}
          <button className="filter-btn">All</button>{" "}
        </NavLink>
        <NavLink to="/bikes">
          {" "}
          <button className="filter-btn">Bikes</button>{" "}
        </NavLink>
        <NavLink to="/helmets">
          {" "}
          <button className="filter-btn">Helmets</button>{" "}
        </NavLink>
      </div>
    </>
  );
};
