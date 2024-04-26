import React, { useEffect, useState } from 'react'

function Eye() {
    const [rotate, setRotate]= useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/ 2;
            let deltaY = mouseY - window.innerHeight/ 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle-180)
        })
    })

  return (
    <div className="eye w-full h-screen overflow-hidden">
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
            <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
                    <div className=" relative w-[10vw] h-[10vw] bg-black rounded-full">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-[2vw] h-[2vw] items-center justify-center bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full">
                    <div className=" relative w-[10vw] h-[10vw] bg-black rounded-full">
                        <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                            <div className="w-[2vw] h-[2vw] items-center justify-center  bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eye