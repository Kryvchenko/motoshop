import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { AboutPage } from "../../pages/About/AboutPage";
import { Home } from "../../pages/Home/Home";
import { Service } from "../../pages/ServicePage/Service";
import { Shop } from "../../pages/Shop/Shop";
import { SingleItem } from "../../pages/Shop/SingleItem";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";

export const Main = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop all="all" />} />
          <Route path="/:name" element={<SingleItem />} />
          <Route path="/bikes" element={<Shop category="bikes" />} />
          <Route path="/helmets" element={<Shop category="helmets" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};
