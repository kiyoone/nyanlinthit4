import React, { useRef, useContext } from "react";
import { Typography, Skeleton } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SAC from "./SwiperComponents/SAC";
import { DisplayTheme } from "../../Context/context";

import { useGetClashQuery } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function SwiperComponent() {
  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;
  const swiperRef = useRef();
  const navigate = useNavigate();

  const bgColor = {
    backgroundColor: darkMode ? "#03070E" : "",
  };

  const {
    data: rpsResources,
    isSuccess: rpsSuccess,
    error: rpsError,
  } = useGetClashQuery(`resources/type/RPS?page=1&limit=3&category=`);

  if (rpsError) navigate("/error");

  const {
    data: srsResources,
    isSuccess: srsSuccess,
    error: srsError,
  } = useGetClashQuery(`resources/type/SRS?page=1&limit=3&category=`);

  if (srsError) navigate("/error");

  const {
    data: refResources,
    isSuccess: refSuccess,
    isLoading: refLoading,
    error: refError,
  } = useGetClashQuery(`resources/type/REF?page=1&limit=3&category=`);

  if (refError) navigate("/error");

  return (
    <section className=" w-full px-2 sm:mt-20 sm:px-18 md:px-32 py-5 ">
      <div>
        <div className="text-2xl sm:text-[32px] font-medium sm:text-start text-center mb-2 sm:mb-12 ">
          <Typography variant="p">Publications</Typography>
        </div>
        <div className="flex items-center gap-4 relative px-5 sm:px-16 mt-1 sm:mt-8">
          {refLoading ? (
            <div className="w-full h-96 ">
              <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
            </div>
          ) : (
            <>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={100}
                loop={true}
                className={`mySwiper h-full  shadow-xl rounded-xl ${
                  darkMode ? "bg-[#03070E]" : "bg-[#D9D9D9] sm:bg-[white]"
                }`}
              >
                {rpsResources?.resources?.map((resource) => (
                  <SwiperSlide key={resource.createdAt}>
                    <SAC resource={resource} />
                  </SwiperSlide>
                ))}
                {srsResources?.resources?.map((resource) => (
                  <SwiperSlide key={resource.createdAt}>
                    <SAC resource={resource} />
                  </SwiperSlide>
                ))}
                {refResources?.resources?.map((resource) => (
                  <SwiperSlide key={resource.createdAt}>
                    <SAC resource={resource} />
                  </SwiperSlide>
                ))}
                <div className="gap-6  sm:hidden flex justify-center py-5">
                  <button
                    onClick={() => swiperRef.current.slidePrev()}
                    className={` rounded-full border ${
                      darkMode ? "border-white" : "border-black"
                    }  sm:p-4`}
                  >
                    <ArrowBackIcon />
                  </button>
                  <button
                    onClick={() => swiperRef.current.slideNext()}
                    className={` rounded-full border ${
                      darkMode ? "border-white" : "border-black"
                    }  sm:p-4`}
                  >
                    <ArrowForwardIcon />
                  </button>
                </div>
              </Swiper>
              <div className="absolute z-20 bottom-10 left-24 gap-6  hidden sm:flex">
                <button
                  onClick={() => swiperRef.current.slidePrev()}
                  className={` rounded-full border ${
                    darkMode ? "border-white" : "border-black"
                  }  sm:p-4`}
                >
                  <ArrowBackIcon />
                </button>
                <button
                  onClick={() => swiperRef.current.slideNext()}
                  className={` rounded-full border ${
                    darkMode ? "border-white" : "border-black"
                  }  sm:p-4`}
                >
                  <ArrowForwardIcon />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
