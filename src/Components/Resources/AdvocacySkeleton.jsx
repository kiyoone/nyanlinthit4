import { Skeleton } from "@mui/material";
import React from "react";

const AdvocacySkeleton = () => {
  return (
    <div className="h-72 sm:h-64 md:h-96  rounded-lg shadow-lg overflow-hidden">
      <div className="h-2/3 ">
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      </div>
      <div className="h-1/2 text-center py-8 px-8">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default AdvocacySkeleton;
