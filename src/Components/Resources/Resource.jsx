import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import Vector from "../../assets/Vector.png";
import { DisplayTheme } from "../../Context/context";
import DetailSlider from "./DetailSlider";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";

const Resource = ({ resource }) => {
  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;

  const textFromDatabase = resource.title; // Replace this with data from your database
  const lines = textFromDatabase.split("\n");
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  return (
    <div className=" w-full sm:py-6 py-2 h-30 sm:h-80 border-b border-gray-600 flex justify-center items-center">
      <div className="w-2/5 h-full hidden sm:flex justify-center items-center">
        <DetailSlider images={resource.image} />
      </div>
      <div className="w-2/6  pr-2 h-full block sm:hidden justify-center items-center overflow-hidden rounded ">
        <img
          src={resource.image[0]}
          className="w-full h-full object-contain rounded"
        />
      </div>
      <div className="w-3/5 h-full flex justify-center items-center ">
        <div className="w-full h-5/6 flex flex-col justify-between">
          <Typography  variant={isMobile ? "body1" : "h6"}>
            {lines.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
          <div className="flex  gap-2 sm:gap-4">
            <a
              href={resource.file[0]}
              download
              className={`flex items-center gap-2 text-xs sm:text-base w-full ${
                darkMode ? "bg-[#03070E]" : "bg-slate-200 "
              } p-2 rounded`}
            >
              <div className="block sm:hidden">
                <BrowserUpdatedIcon />
              </div>
              <div className="sm:block hidden">
                <img src={Vector} alt="" />
              </div>
              <span className="hidden sm:inline">
                <p className={darkMode ? "text-white" : "text-theme"}>
                  {/* {resource.title} */}
                  Download English PDF File
                </p>
                {/* <small className={darkMode ? "text-white" : "text-theme"}>
                  Download English PDF File
                </small> */}
              </span>
            </a>
            <a
              href={resource.mmFile[0]}
              download
              className={`flex items-center gap-2 text-xs sm:text-base w-full ${
                darkMode ? "bg-[#03070E]" : "bg-slate-200 "
              } p-2 rounded`}
            >
              <div className="block sm:hidden">
                <BrowserUpdatedIcon />
              </div>
              <div className="sm:block hidden">
                <img src={Vector} alt="" />
              </div>
              <span className="hidden sm:inline">
                <p className={darkMode ? "text-white" : "text-theme"}>
                  {/* {resource.title} */}
                  မြန်မာ စာတမ်း ဒေါင်းလုဒ်ဆွဲရန်
                </p>
                {/* <small className={darkMode ? "text-white" : "text-theme"}>
                မြန်မာ စာတမ်း ဒေါင်းလုဒ်ဆွဲရန်
                </small> */}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
