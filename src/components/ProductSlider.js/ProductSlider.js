import React, { useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProductSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const ProductSlider = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <>
      <Swiper
        loop={true}
        zoom={0}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {Object.values(images).map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={value} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {Object.values(images).map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={value} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
