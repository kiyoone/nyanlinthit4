import React, { useContext } from "react";
import { Typography } from "@mui/material";
import StatementPhoto from "../../assets/Statement.jpg";
import { DisplayTheme } from "../../Context/context";
import { useGetClashQuery } from "../../features/api/apiSlice";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";


const Statement = () => {
  const { darkMode } = useContext(DisplayTheme);
  const navigate = useNavigate();

  const {
    data: statements,
    isLoading,
    isError,
    isSuccess,
  } = useGetClashQuery(`resources/type/STATEMENTS?page=1&limit=6&category=`);
  if (isError) navigate("/error");
  return (
    <div className="mb-14">
      <div className="w-full text-2xl md:text-4xl mb-4 sm:mb-24 mx-auto text-center font-medium">
        <h1 className={darkMode ? "text-white" : "text-black"}>Statement</h1>
      </div>
      <div className="p-4 md:p-8">
        <div className="h-64 md:h-56 lg:h-72 w-full">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper h-full"
          >
            {isSuccess &&
              statements?.resources?.map((statement) => (
                <SwiperSlide key={statement._id}>
                  <div className="relative w-full h-full">
                    <a
                      href={statement?.mmFile[0]}
                      className="absolute h-full w-full top-0 opacity-0 hover:opacity-80 rounded-lg drop-shadow-md flex items-center justify-center bg-gray-100"
                      download
                      title="Click to Download PDF"
                    >
                      <DownloadForOfflineIcon fontSize="large" />
                    </a>
                    <img
                      src={statement?.image[0]}
                      className="w-full h-full rounded-lg shadow-md"
                      alt="image"
                      title="Click to Download"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Statement;