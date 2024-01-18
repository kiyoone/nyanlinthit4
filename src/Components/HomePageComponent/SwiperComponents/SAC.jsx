import React from "react";
import { Typography } from "@mui/material";

const SAC = ({ resource }) => {
  return (
    <div className="h-96 flex flex-col-reverse sm:flex-row  w-full  ">
      <div className="sm:py-4  w-full  sm:w-3/5 h-full rounded-r-xl mt-2">
        <div className="text-lg sm:text-2xl text-start  mb-2 sm:mb-6 px-4 sm:px-8 font-medium">
          <Typography variant="p">{resource.category}</Typography>
        </div>
        <div className="text-sm sm:text-base font-light text-justify indent-2  px-4 sm:px-8">
          <Typography variant="p">{resource.title}</Typography>
        </div>
      </div>
      <div className="w-full sm:w-2/5 h-1/2 sm:h-full">
        <img
          src={resource.image[0]}
          className="rounded-r-xl h-full w-full"
          alt="resources"
        />
      </div>
    </div>
  );
};

export default SAC;
