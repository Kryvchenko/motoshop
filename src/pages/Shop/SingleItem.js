import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { shopArray } from "./shopArray";
import { Paper } from "@mui/material";

export const SingleItem = () => {
  const { name } = useParams();
  const thisArray = shopArray.find((prod) => prod.name === name);
  const [imageColor, setImageColor] = useState(thisArray.images.image1);
  function toggleColor() {
    setImageColor();
  }

  return (
    <section className="single-item">
      <Paper
        style={{ padding: "20px", marginBottom: "10px" }}
        className="single-item-paper"
      >
        <div className="item-content-right">
          <h1 className="description-title">{thisArray.description}</h1>
          <div className="fulldescription">{thisArray.fulldescription}</div>
          <h3 className="description-title">Price: ${thisArray.price}</h3>
          <button onClick={toggleColor}>Toggle color</button>
        </div>
        <div className="item-content-left">
          <img src={imageColor} alt="" className="single-item-img" />
        </div>
      </Paper>
      <Link to="/shop" className="back-link">
        &larr;Back
      </Link>
    </section>
  );
};
