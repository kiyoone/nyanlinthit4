import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

import { DisplayTheme } from "../../Context/context";

const HeroSection = () => {
  const theme = useContext(DisplayTheme);
  const { darkMode, myanmarLanguage } = theme;
  return (
    <section className="h-[70vh] sm:h-[50vh]  md:h-screen  relative z-10 ">
      <div className="h-full w-full absolute  flex items-center justify-start home-hero">
        <div
          data-aos="fade-left"
          className="w-full  rounded-lg p-5 sm:ps-20 text-white "
        >
          <div className="mb-6 md:mb-10  text-3xl sm:text-4xl md:text-[64px] font-bold">
            <Typography variant="p">Nyan Lynn Thit Analytica</Typography>
          </div>
          <div className="w-2/3 sm:w-1/2">
            <Typography variant="p" className="text-[14px] sm:text-2xl  pt-3">
              {myanmarLanguage
                ? ""
                : ` is a non-profit organization that tends to political research,
            advocacy, and youth empowerment.`}
            </Typography>
          </div>
          <div className="mt-5 ">
            <Link to="/aboutus">
              <Button
                sx={{
                  border: "1px solid white",
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
    </section>
  );
};

export default HeroSection;
