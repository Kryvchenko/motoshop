import React from "react";
import "./Shop.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ShopItem = ({
  id,
  name,
  description,
  capacity,
  type,
  price,
  image,
}) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="card"
    >
      <img src={image} alt="" className="product-img" />
      <div className="card-container">
        <h4>{name}</h4>
        <p>{description}</p>
        <div>Capacity: {capacity} Gb</div>
        <div>Type: {type}</div>
        <div>{price} $</div>
        <Link to={`shopitem/${id}`}>More info...</Link>
      </div>
    </motion.div>
  );
};
