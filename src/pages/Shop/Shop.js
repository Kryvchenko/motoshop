import React from "react";
import { shopArray } from "./shopArray";
import "./Shop.css";
import { Filter } from "../../components/Filter/Filter";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { FaStar } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

export const Shop = ({ category, all }) => {
  return (
    <>
      {" "}
      <Filter category={category} all={all} />
      <motion.div layout className="shop">
        {shopArray
          .filter((el) => el.category === category || el.all === all)
          .map(({ id, name, description, capacity, type, price, image }) => (
            <Paper key={id}>
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="card"
              >
                <Link to={`/${name}`} className="info-link">
                  {" "}
                  <img src={image} alt="" className="product-img" />
                </Link>
                <div className="card-container">
                  <span className="raiting-span">
                    {" "}
                    <h4>{name}</h4>
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </span>
                  <div>Price: {price} $</div>
                  <span className="raiting-span">
                    <Link to={`/${name}`} className="info-link">
                      More info...
                    </Link>
                  </span>{" "}
                </div>
              </motion.div>
            </Paper>
          ))}
      </motion.div>
    </>
  );
};
