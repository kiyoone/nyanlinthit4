import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function DetailSlider({ images }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-3/5 h-full sm:h-5/6 "
      >
        {images.map((each) => (
          <SwiperSlide key={each} className="w-full h-full ">
            <img
              src={each}
              className="object-center w-full h-full rounded-lg"
              alt={each}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
