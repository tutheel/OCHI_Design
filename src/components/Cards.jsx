import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 items-center px-20 flex gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 font-["Neue Montreal"] border-[2px] rounded-full text-[#CDEA68] border-[#CDEA68]'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer  w-1/2 h-[50vh] flex gap-5 '>
            <div className='card relative w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 font-["Neue Montreal"] border-[2px] rounded-full'>&copy;2019-2022</button>
            </div>
            <div className='card relative w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center'>
                <img className="w-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 font-["Neue Montreal"] border-[2px] rounded-full'>&copy;2019-2022</button>
            </div>
        </div>

    </div>
  )
}

export default Cards