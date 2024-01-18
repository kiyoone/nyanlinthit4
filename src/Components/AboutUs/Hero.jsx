import React from "react";
import AboutHome from "../../assets/aboutHome.png";
const Hero = () => {
	return (
		// <div className=" w-full pb-[5vh] sm:pb-[15vh] pt-[15vh] px-5 sm:px-[25vh]">
		//   <div className="flex flex-col sm:flex-row gap-8 justify-between">
		//   <div className="sm:w-2/5 h-full relative">
		//       <img src={AboutHome} alt="" />
		//     </div>
		//     <div className="sm:w-1/2 absolute text-white">
		//       <div className="text-[36px] sm:text-[96px] font-medium  text-start">
		//         About Us
		//       </div>
		//       <div className="text-[14px] sm:text-[20px] mt-5 sm:mt-0 indent-12 leading-6">
		//         Nyan Lynn Thit Analytica is a non-profit organization that tends to
		//         political research, advocacy, and youth empowerment.
		//       </div>
		//     </div>

		//   </div>
		// </div>
		<div className="Con   mx-auto  w-full h-auto mt-[100px] max-sm:px-0 sm:px-[40px] md:px-[75px] mb-20">
			<div
				className="relative w-full max-sm:h-[261px] sm:h-[361px] md:h-[411px]  bg-center bg-cover"
				style={{ backgroundImage: `url(${AboutHome})` }}
			>
				<div className="absolute  left-1/2 transform -translate-x-1/2  w-full h-auto max-md:px-[30px] md:px-[50px] text-white  ">
					<div className="max-sm:text-3xl sm:text-4xl md:text-[64px] font-medium  text-center max-sm:mt-10 sm:mt-20 md:mt-24 mb-5">
						About us
					</div>
					<div className=" h-auto max-sm:text-[13px] sm:text-[14px] md:text-[16px] mt-4 indent-12 max-sm:leading-[15px] sm:leading-[25px] md:leading-[35px] tracking-[3%] max-sm:text-justify text-center ">
						Nyan Lynn Thit Analytica is a non-governmental research organization
						that tends to political research, advocacy, and youth empowerment.
						To create a society that values human rights and does not
						discriminate based on the ground of different categories of people,
						NLTA focuses on peace, human rights, democratic values, and
						multiculturalism.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
