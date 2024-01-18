import React from 'react';
import arrow from '../../assets/Arrow.svg';
import eye from '../../assets/Eye.svg';
import diamond from '../../assets/Diamond.svg';
const MissionVisionCore= () =>{
  return(
    
    <div className="con h-auto flex max-md:gap-y-8 max-md:px-[35px]  max-md:flex-col max-md:items-center   w-full mb-20   md:px-[72px] md:flex-row  md:justify-between ">
      <div className='cardOne max-md:h-[350px] md:h-[450px]  flex flex-col items-center max-sm:w-full sm:w-[70%] md:w-[29%] max-md:px-[30px] max-md:py-[40px] md:px-[50px] md:pt-[30px] rounded-lg bg-[#419ED9]'>
        <img className='max-md:w-[70px] max-md:h-[70px]' src={arrow} alt=""/>
        <h1 className='text-white max-sm:text-[28px] sm:text-[30px] md:text-[32px] font-normal mt-[30px] mb-[10px]'>Mission</h1>
        <p className='text-white text-justify max-md:text-[14px] md:text-[16px]'>Nyan Lin Thit Analytica implements processes aimed to promote social cohesion and for the emergence of future leaders who will serve to build a free and just society. 
</p>
      </div>
      <div className='cardTwo max-md:h-[350px] md:h-[450px]  flex flex-col items-center max-sm:w-full sm:w-[70%] md:w-[29%] max-md:px-[40px] max-md:py-[30px] md:px-[50px] md:pt-[30px] rounded-lg bg-[#419ED9]'>
        <img className='max-md:w-[70px] max-md:h-[70px]' src={eye} alt=""/>
        <h1 className='text-white max-sm:text-[28px] sm:text-[30px] md:text-[32px] font-normal md:mt-[42px] mt-[30px] mb-[10px]'>Vision</h1>
        <p className='text-white text-justify max-md:text-[14px] md:text-[16px]'>Nyan Lynn Thit Analytica hopes for the founding steadily of peaceful and secure society.
</p>
      </div>
      <div className='cardThree max-md:h-[350px] md:h-[450px]  flex flex-col items-center max-sm:w-full sm:w-[70%] md:w-[29%] max-md:px-[30px] max-md:py-[40px] md:px-[50px] md:pt-[30px] rounded-lg bg-[#419ED9]'>
        <img className='max-md:w-[70px] max-md:h-[70px]' src={diamond} alt=""/>
        <h1 className='text-white max-sm:text-[28px] sm:text-[30px] md:text-[32px] font-normal md:mt-[34px] mt-[30px] mb-[10px]'>Core Values</h1>
        <ul className="list-disc px-8 sm:px-4 text-white max-md:text-[14px]">
            <li className="list-disc">Human Rights</li>
            <li>Diversity</li>
             <li>Development and growth</li>
             <li>Equality and Equity</li>
            <li>Justice</li>
           </ul>
      </div>
      
      
      
     
      
      
      
    </div>
    
  )
};
export default MissionVisionCore;


// <div className="w-full px-5 sm:px-[25vh]  sm:mt-20 mb-20 sm:mb-40">
    //   <div className="flex flex-col sm:flex-row gap-5 sm:justify-between mb-5 sm:mb-12">
    //     <div className="w-full sm:w-2/5">
    //       <div className="text-[24px] sm:text-[32px]  text-start">Mission</div>
    //       <div className="text-[14px] sm:text-[18px] indent-12 sm:indent-0">
    //         Nyan Lin Thit Analytica implements processes aimed to promote social
    //         cohesion and for the emergence of future leaders who will serve to
    //         build a free and just society.
    //       </div>
    //     </div>

    //     <div className="w-full sm:w-2/5">
    //       <div className="text-[24px] sm:text-[32px] text-start">Vision</div>
    //       <div className="text-[14px] sm:text-[18px] indent-12 sm:indent-0">
    //         Nyan Lynn Thit Analytica hopes for the founding steadily of peaceful
    //         and secure society.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-start sm:justify-center sm:mb-12">
    //     <div>
    //       <div className="text-[24px] sm:text-[32px]">Core Values</div>
    //       <ul className="list-disc px-8 sm:px-4">
    //         <li className="list-disc">Human Rights</li>
    //         <li>Diversity</li>
    //         <li>Development and growth</li>
    //         <li>Equality and Equity</li>
    //         <li>Justice</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
