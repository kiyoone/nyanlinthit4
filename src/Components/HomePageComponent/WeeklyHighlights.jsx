import React, { useContext } from "react";
import WH_Left from "../../assets/wh_left.svg";
import WH_Right from "../../assets/wh_right.svg";
import WH_Center from "../../assets/wh_center.svg";
import { Button, Typography } from "@mui/material";
import { DisplayTheme } from "../../Context/context";
import { Link } from "react-router-dom";
import WH1 from "../../assets/WH1.png";
import WH2 from "../../assets/WH2.png";
import WH3 from "../../assets/WH3.png";
import WH4 from "../../assets/WH4.png";

const WeeklyHighlights = () => {
  const { darkMode } = useContext(DisplayTheme);
  return (
    <div className="h-[88vh] sm:h-[100vh] relative p-6 sm:p-20">
      <img
        src={WH_Left}
        alt={"WH_Left"}
        className="absolute -top-10 left-0 -z-1 hidden"
      />
      <img
        src={WH_Center}
        alt={"WH_Center"}
        className="absolute bottom-32 right-40 hidden"
      />
      <img
        src={WH_Right}
        alt={"WH_Right"}
        className="absolute top-20 right-0 hidden"
      />
      <div className="w-full max-sm:px-[10px] max-md:p-12 h-full sm:h-full flex md:flex-row max-md:flex-col max-md:items-center md:justify-around max-sm:gap-x-0 max-sm:gap-y-12 gap-10">
        <div className="max-sm:w-[90%] max-sm:h-[50%] md:w-[75%] max-md:w-[85%] md:h-full  sm:h-[50%] flex gap-8">
          <div className="w-1/2 h-full flex flex-col justify-start gap-8">
            <div className="w-full h-2/5  ">
              <img src={WH1} className="w-full h-full rounded-tl-xl" />
            </div>
            <div className="w-full h-2/5  ">
              <img src={WH2} className="w-full h-full rounded-bl-xl" />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end gap-8">
            <div className="w-full h-2/5  ">
              <img src={WH3} className="w-full h-full rounded-tr-xl" />
            </div>
            <div className="w-full h-2/5  ">
              <img src={WH4} className="w-full h-full rounded-br-xl" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[85%] flex flex-col justify-start sm:justify-center sm:items-start gap-4">
          <div className=" w-full max-sm:text-3xl sm:text-4xl md:text-[32px] mb-2   font-medium">
            <h1 className={darkMode ? "text-white" : "text-black"}>
              Weekly Highlights
            </h1>
          </div>
          <Typography variant="p" className="text-[14px] md:text-xl indent-5">
            Explore our Weekly Highlights! We provide comprehensive reports from
            four critical monitoring sessions: Armed Clash Monitor, SAC Monitor,
            NUG CRPH Monitor, and others.
          </Typography>
          <Link to="/resources/weekly_highlights/acm" className="block">
            <Button
              sx={{
                backgroundColor: darkMode ? "" : "#193967",
                border: darkMode ? "1px solid white" : "none",
                borderRadius: 12,
                color: "white",
                paddingInline: 2,
                marginTop: 2,
              }}
            >
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeeklyHighlights;
