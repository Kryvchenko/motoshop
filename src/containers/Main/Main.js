import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Shop } from "../../pages/Shop/Shop";
import { ShopItemDetails } from "../../pages/Shop/ShopItemDetails";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop all="all" />} />
        <Route path="/shopitem/:productId" element={<ShopItemDetails />} />
        <Route path="/bikes" element={<Shop category="bikes" />} />
        <Route path="/helmets" element={<Shop category="helmets" />} />
      </Routes>
    </>
  );
};
