import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".15" className='w-full h-screen pt-1'>
        <div className='textstructure mt-52 px-20 text-zinc-100'>
          {["We Create", "Eye-Opening", "Presentations"].map((item,index)=>{
            return(
              <div className='Masker' key={index}> 
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div 
                    initial={{width:0}}
                    animate={{width:"8vw"}} 
                    transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                    className="mr-[1.1vw] w-[8vw] rounded-md h-[4.6vw] -top-[1vw] relative bg-[#004D43]"></motion.div>
                  )}
                  <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[7vw] leading-[6vw] font-['founders_Grotesk_X'] font-bold">
                    {item}
                  </h1>
                </div>
              </div>
            )
          })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return(
                <p className="text-md font-light tracking-tight leading-none font-['Neue Montreal']" key={index}>{item}</p>
            )
          })}
          <div className='start flex items-center gap-5'>
            <div className="uppercase px-5 py-1 border-[2px] border-zinc-400 font-light text-sm rounded-full">start the project</div>
            <div className="w-8 h-8 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage