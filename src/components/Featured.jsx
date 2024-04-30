import React from 'react'

function Featured() {
  return (
    <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-7xl font-['Neue Montreal'] tracking-tight">Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-20 mt-10">
                <div className='cardcontianer relative w-1/2 h-[60vh] '>
                    <h1 className="text-[#CDEA68] absolute text-[4vw] -translate-y-1/2 z-[9] left-full -translate-x-1/2 top-1/2 leading-none tracking-tighter">FYDE</h1>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>               
                </div>
                <div className='cardcontianer relative w-1/2 h-[60vh] '>
                    <h1 className="text-[#CDEA68] absolute text-[4vw] -translate-y-1/2 z-[9] right-full -translate-x-1/2 top-1/2 leading-none tracking-tighter">VISE</h1> 
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured