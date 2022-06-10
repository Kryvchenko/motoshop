import React from "react";
import { shopArray } from "./shopArray";
import "./Shop.css";
import { ShopItem } from "./ShopItem";
import { Filter } from "../../components/Filter/Filter";
import { motion } from "framer-motion";

export const Shop = ({ category, all }) => {
  return (
    <>
      {" "}
      <Filter category={category} all={all} />
      <motion.div layout className="shop">
        {shopArray
          .filter((el) => el.category === category || el.all === all)
          .map(({ id, name, description, capacity, type, price, image }) => (
            <ShopItem
              key={id}
              id={id}
              name={name}
              description={description}
              capacity={capacity}
              type={type}
              price={price}
              image={image}
            />
          ))}
      </motion.div>
    </>
  );
};
