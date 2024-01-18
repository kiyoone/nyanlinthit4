import React, { useContext } from "react";
import WH_Left from "../../assets/wh_left.svg";
import WH_Right from "../../assets/wh_right.svg";
import WH_Center from "../../assets/wh_center.svg";
import { Button, Typography } from "@mui/material";
import { DisplayTheme } from "../../Context/context";
import { Link } from "react-router-dom";
import AdvocacyPhoto from "../../assets/Advocacy.jpg";

const Advocacy = () => {
  const { darkMode } = useContext(DisplayTheme);
  return (
    <div className="sm:h-[90vh] relative p-5 sm:p-20">
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
      <div className="w-full sm:p-12 h-full flex flex-col sm:flex-row gap-5 sm:gap-32">
        <div className="sm:w-2/5 flex gap-4">
          <img src={AdvocacyPhoto} className="w-full h-full" alt="" />
        </div>
        <div className="sm:w-1/2 flex flex-col justify-center items-start gap-2 sm:gap-4">
          <div className=" w-full text-2xl md:text-[32px] mb-5   font-medium">
            <h1 className={darkMode ? "text-white" : "text-black"}>Advocacy</h1>
          </div>
          <Typography
            variant="p"
            className="text-lg md:text-xl font-light indent-5 sm:indent-12"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
          <Link to="/resources/weekly_highlights/acm">
            <Button
              sx={{
                backgroundColor: darkMode ? "" : "#193967",
                border: darkMode ? "1px solid white" : "",
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

export default Advocacy;
