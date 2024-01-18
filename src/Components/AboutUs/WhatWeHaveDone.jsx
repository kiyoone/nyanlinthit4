import React from "react";

const WhatWeHaveDone = ({ children }) => {
  return (
    
    <div className=" w-full max-sm:px-[30px]  sm:px-[40px] max-md:flex-col max-md:gap-y-7    mt-5 mb-5 flex md:flex-row md:justify-between   md:items-center md:gap-x-5 md:px-[72px]
    ">
      <div className="sm:w-3/4 sm:mx-auto md:w-2/5 md:h-[420px] max-md:h-[370px]  md:pr-10 rounded-[24px]">{children}</div>
      <div className=" max-md:w-full w-[766px] max-md:mx-auto max-md:h-[400px] flex flex-col justify-center max-md:justify-start items-center ">
        <div className="max-md:text-[46px] max-md:mb-[20px] md:text-[56px]  font-semibold text-[#419ED9] md:mt-[15px] md:mb-[30px]  md:text-center">
          What We Have Done?
        </div>
        <div className="max-sm:text-[14px] max-sm:leading-5 sm:leading-8 md:text-[16px] md:w-full  md:leading-[30px] md:indent-[100px] text-justify ">
        From 2017, we have been doing media monitoring and documenting human rights violations across the country. 
        We organized the training of promoting peace and diversity to the community leaders at the grassroots level. 
        Based on the findings of our reports, we organized advocacy meetings with the stakeholders for the human rights 
        violations and updates of the political situation in Burma (Myanmar). Moreover, starting in 2019, the data of Human 
        Rights abuses in Rakhine has been transferred to IIMM.
        </div>
        <div className="max-sm:text-[14px] max-sm:leading-5 sm:leading-8 md:text-[16px] md:w-full md:leading-[30px]  md:indent-[100px] text-justify  ">
        Currently, Nyan Lynn Thit Analytica is addressing the issues on reintegration and transitional justice in the 
        field of Civil Disobedience Movement and Ultranationalism and its hatred while monitoring the Human Rights 
        Violations in the country. Furthermore, it is working to provide educational assistance to Myanmar youths 
        in order to improve their awareness of human rights, transitional justice and conflicts. 
        </div>
      </div>
    </div>
    
  );
};

export default WhatWeHaveDone;
