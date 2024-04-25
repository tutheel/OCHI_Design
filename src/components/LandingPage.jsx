import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{
            return(
              <div className='Masker' key={index}>
                <h1 className="uppercase text-[7vw] leading-[5.5vw] font-['founders_Grotesk_X'] font-bold">
                  {item}
                </h1>
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