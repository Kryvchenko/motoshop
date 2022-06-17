import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About/About";
import { Home } from "../../pages/Home/Home";
import { Service } from "../../pages/ServicePage/Service";
import { Shop } from "../../pages/Shop/Shop";
import { SingleItem } from "../../pages/Shop/SingleItem";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/shop" element={<Shop all="all" />} />
        <Route path="/:name" element={<SingleItem />} />
        <Route path="/bikes" element={<Shop category="bikes" />} />
        <Route path="/helmets" element={<Shop category="helmets" />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
};
