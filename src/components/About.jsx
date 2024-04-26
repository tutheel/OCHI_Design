import React from 'react'

function About() {
  return (
    <div className="w-full py-10 bg-[#CDEA68] font-['Neue Montreal'] rounded-tl-3xl rounded-tr-3xl text-zinc-900">
        <h1 className="px-20 py-5 font-['Neue Montreal'] text-[3vw] leading-[3.7vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need to <u>raise funds</u>, <u>sell products</u>, <u>explain complex ideas</u>, and <u>hire great people</u>.
        </h1>
        <div className="border-t-[1px] w-full border-zinc-400 mt-10 flex "></div>
        <div className="flex mt-10 mr-5">
          <div className="w-1/2 ">
                  <h1 className="px-20 py-5 text-[3vw] font-semibold">Our approach:</h1>
                  <button className="uppercase items-center px-16 ml-20 py-7 text-[.8vw] bg-zinc-900 rounded-full text-white flex gap-16">
                      <h1>Read More</h1>
                      <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                  </button>
          </div>
          <div className="w-1/2 h-[60vh] bg-[#999] rounded-3xl">
          </div>
          </div>
    </div>
  )
}

export default About