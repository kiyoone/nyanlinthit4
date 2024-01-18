import { Skeleton, Typography } from "@mui/material";
import React, { useContext } from "react";
import Vector from "../../assets/Vector.png";
import { DisplayTheme } from "../../Context/context";

const ResourceSkeleton = () => {
  const theme = useContext(DisplayTheme);
  const { darkMode } = theme;
  return (
    <div className="w-full p-6 h-80 border-b border-gray-600 flex justify-center items-center">
      <div className="w-2/5 h-full flex justify-center items-center">
        <Skeleton
          animation="wave"
          variant="rounded"
          sx={{ width: "75%", height: "83%" }}
        />
      </div>
      <div className="w-3/5 h-full flex justify-center items-center">
        <div className="w-full h-5/6 flex flex-col justify-between">
          <Skeleton
            animation="wave"
            variant="rounded"
            sx={{ width: "100%", height: "70%" }}
          />
          <div className="flex gap-4 h-1/4">
            <Skeleton
              animation="wave"
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              sx={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSkeleton;
