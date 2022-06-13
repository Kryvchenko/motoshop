import React from "react";
import { useParams } from "react-router-dom";
import { shopArray } from "./shopArray";

export const ShopItemDetails = () => {
  const { productId } = useParams();
  const thisProduct = shopArray.find((prod) => prod.id === productId);
  return (
    <>
      <h1 style={{ paddingTop: "100px" }}>{thisProduct.price}</h1>;
    </>
  );
};
