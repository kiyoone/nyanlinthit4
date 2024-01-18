import React, { useContext } from "react";
import { Typography } from "@mui/material";
import Research from "../../assets/WWD1.svg";
import Resource from "../../assets/WWD2.svg";
import Training from "../../assets/WWD3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { DisplayTheme } from "../../Context/context";
import WhatWeDoNew from "../../assets/WhatWeDoNewBg.png";
import WhatWeDoSmall from "../../assets/SmallWhatWeDo.png";

const WhatWeDo = () => {
  const theme = useContext(DisplayTheme);
  const { darkMode, myanmarLanguage } = theme;

  return (
    <section className=" w-full    bg-no-repeat bg-cover relative">
      <img
        src={WhatWeDoNew}
        className="absolute top-0 z-0 w-full h-full hidden sm:block"
        alt=""
      />
      <img
        src={WhatWeDoSmall}
        className="absolute top-0 z-0 w-full h-full block sm:hidden"
        alt=""
      />
      <div className="w-full h-full py-5 sm:py-10 ">
        <div className=" w-full text-2xl md:text-4xl mb-5  text-center font-semibold z-10 relative">
          <h1 className="text-black">
            {myanmarLanguage ? "လက်ရှိလုပ်ဆောင်မှုများ" : "What We Do!"}
          </h1>
        </div>
        <div className="hidden sm:flex flex-wrap justify-center text-black gap-8 py-10">
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3   rounded-xl py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <img src={Research} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              <Typography variant="p">
                {myanmarLanguage
                  ? "သုတေသန နှင့် စောင့်ကြည့်လေ့လာမှုများ"
                  : "Research & Monitoring"}
              </Typography>
            </div>
            <ul className="list-none text-center  font-light flex flex-col gap-4 text-sm sm:text-lg">
              <li>
                {myanmarLanguage
                  ? "သုတေသန စာတမ်းများ"
                  : "Research Paper Series"}
              </li>
              <li>{myanmarLanguage ? "အထူးအစီရင်ခံစာ" : "Special Report"}</li>
              <li>
                {myanmarLanguage ? "အပတ်စဥ် သတင်းထူးများ" : "Weekly Highlights"}
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3 rounded-xl   py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <img src={Resource} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              <Typography variant="p">
                {myanmarLanguage ? "ဆော်သြလုပ်ဆောင်မှုများ" : "Advocacy"}
              </Typography>
            </div>
            <ul className="list-none  text-center text-sm sm:text-lg flex flex-col gap-4 font-light">
              <li>
                {myanmarLanguage
                  ? "ပြည်တွင်း လှုံ့ဆော်မှုများ"
                  : "Regional Advocacy"}
              </li>
              <li>
                {myanmarLanguage
                  ? "နိုင်ငံတကာသို့ လှုံ့ဆော်မှုများ"
                  : "International Advocacy"}
              </li>
              <li>
                {myanmarLanguage
                  ? "လူထုနှင့်ထိတွေ့ဆက်ဆံခြင်း"
                  : "Public Engagement"}
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-up"
            className="w-5/6 md:w-1/4 sm:w-1/3 rounded-xl   py-5"
          >
            <div className="mb-4 w-full flex justify-center">
              <img src={Training} className="w-4/5 h-40" alt="research photo" />
            </div>
            <div className="text-lg md:text-xl font-medium text-center mb-4">
              {" "}
              <Typography variant="p">
                {myanmarLanguage ? "သင်တန်းပေးခြင်း" : "Training"}
              </Typography>
            </div>
            <ul className="list-none text-center text-sm font-light sm:text-lg flex flex-col gap-4">
              <li>
                {myanmarLanguage
                  ? "လူငယ်များ၏စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း"
                  : `Youth Empowerment`}
              </li>
              <li>
                {myanmarLanguage
                  ? "နိုင်ငံသားဆိုင်ရာပညာရေး"
                  : "Civic Education"}{" "}
              </li>
              <li>{myanmarLanguage ? "စာပေရေးရာများ" : "Reading Materials"}</li>
            </ul>
          </div>
        </div>
        <div className="flex  sm:hidden text-black mt-2 ">
          <Swiper
            className="mySwiper w-full flex justify-center"
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="w-full ">
                <div className="mb-2 w-full flex justify-center">
                  <img
                    src={Research}
                    className="w-4/5 h-40"
                    alt="research photo"
                  />
                </div>
                <div className="text-lg md:text-2xl text-center mb-2">
                  <Typography variant="p">
                    {myanmarLanguage
                      ? "သုတေသန နှင့် စောင့်ကြည့်လေ့လာမှုများ"
                      : "Research & Monitoring"}
                  </Typography>
                </div>
                <ul className="list-none text-center  font-light flex flex-col gap-2 text-sm sm:text-lg">
                  <li>
                    {myanmarLanguage
                      ? "သုတေသန စာတမ်းများ"
                      : "Research Paper Series"}
                  </li>
                  <li>
                    {myanmarLanguage ? "အထူးအစီရင်ခံစာ" : "Special Report"}
                  </li>
                  <li>
                    {myanmarLanguage
                      ? "အပတ်စဥ် သတင်းထူးများ"
                      : "Weekly Highlights"}
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-xl ">
                <div className="mb-2 w-full flex justify-center">
                  <img
                    src={Training}
                    className="w-4/5 h-40"
                    alt="research photo"
                  />
                </div>
                <div className="text-lg md:text-2xl text-center mb-2">
                  {" "}
                  <Typography variant="p">
                    {myanmarLanguage ? "သင်တန်းပေးခြင်း" : "Training"}
                  </Typography>
                </div>
                <ul className="list-none text-center text-sm font-light sm:text-lg flex flex-col gap-2">
                  <li>
                    {myanmarLanguage
                      ? "လူငယ်များ၏စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း"
                      : `Youth Empowerment`}
                  </li>
                  <li>
                    {myanmarLanguage
                      ? "နိုင်ငံသားဆိုင်ရာပညာရေး"
                      : "Civic Education"}{" "}
                  </li>
                  <li>
                    {myanmarLanguage ? "စာပေရေးရာများ" : "Reading Materials"}
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" rounded-xl">
                <div className="mb-2 w-full flex justify-center">
                  <img
                    src={Resource}
                    className="w-4/5 h-40"
                    alt="research photo"
                  />
                </div>
                <div className="text-lg md:text-2xl text-center mb-2">
                  <Typography variant="p">
                    {myanmarLanguage ? "ဆော်သြလုပ်ဆောင်မှုများ" : "Advocacy"}
                  </Typography>
                </div>
                <ul className="list-none text-center text-sm sm:text-lg flex flex-col gap-2 font-light">
                  <li>
                    {myanmarLanguage
                      ? "ပြည်တွင်း လှုံ့ဆော်မှုများ"
                      : "Regional Advocacy"}
                  </li>
                  <li>
                    {myanmarLanguage
                      ? "နိုင်ငံတကာသို့ လှုံ့ဆော်မှုများ"
                      : "International Advocacy"}
                  </li>
                  <li>
                    {myanmarLanguage
                      ? "လူထုနှင့်ထိတွေ့ဆက်ဆံခြင်း"
                      : "Public Engagement"}
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
