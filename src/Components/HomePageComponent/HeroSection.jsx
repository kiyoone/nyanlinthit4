

import Link from "next/link";
import { Typography, Button } from "@mui/material";



const HeroSection = () => {
  
  return (
    <section className="h-screen   ">
      <div className="h-full w-full  flex items-center justify-start home-hero bg-cover bg-center bg-no-repeat">
        <div
          data-aos="fade-left"
          className="w-full  rounded-lg p-5 sm:ps-20 text-white "
        >
          <div className="mb-10  text-6xl font-bold">
            Nyan Lynn Thit Analytica
          </div>
          <div className="w-2/3 sm:w-1/2">
            <Typography variant="p" className="text-[14px] sm:text-2xl  pt-3">
               ` is a non-profit organization that tends to political research,
            advocacy, and youth empowerment.`
            </Typography>
          </div>
          <div className="mt-5 ">
            <Link href="/aboutus">
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
