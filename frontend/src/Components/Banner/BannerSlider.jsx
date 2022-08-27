import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerSlider = () => {
  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="swiper-one">
            <img src="./image/one.jpg"/>
              <div className="overlay">
                <h1>The Best Quality Products Guaranteed!</h1>
                <p>Dramatically facilitate effective total linkage for go forward processes...</p>
                <button>Shop Now</button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./image/two.jpg"/>
              <div className="overlay">
                <h1>Best Different Type of Grocery Store</h1>
                <p>Dramatically facilitate effective total linkage for go forward processes...</p>
                <button>Shop Now</button>
              </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./image/three.jpg"/>
              <div className="overlay">
                <h1>Quality Freshness Guaranteed!</h1>
                <p>Intrinsicly fashion performance based products rather than accurate benefits...</p>
                <button>Shop Now</button>
              </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSlider

