import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen justify-center flex items-center cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <h1 className="text-xl sm:text-6xl md:text-8xl opacity-50 text-center">
        Connection Error
        <br />
        <small className="text-base">Click any where to return!</small>
      </h1>
    </div>
  );
};

export default Error;
