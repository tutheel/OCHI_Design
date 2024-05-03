import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cardAnimations = [useAnimation(),useAnimation()];

    const handleHover = (index)=>{
        cardAnimations[index].start({y:"0"});
    }

    const handleHoverEnd = (index)=>{
        cardAnimations[index].start({y:"100%"});
    }

  return (
    <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className="text-7xl font-['Neue Montreal'] tracking-tight">Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className="cardAnimations w-full flex gap-20 mt-10">
                <motion.div 
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
                className='cardcontainer relative w-1/2 h-[60vh] '>
                    <h1 className="text-[#CDEA68] absolute flex overflow-hidden text-[4vw] -translate-y-1/2 z-[9] left-full -translate-x-1/2 top-1/2 leading-none tracking-tighter">
                        {"FYDE".split("").map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cardAnimations[0]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.05}}
                            className="inline-block"
                            key={index}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>               
                </motion.div>
                <motion.div 
                    onHoverStart={()=>handleHover(1)}
                    onHoverEnd={()=>handleHoverEnd(1)}
                    className='cardcontainer relative w-1/2 h-[60vh] '>
                    <h1 className="text-[#CDEA68] absolute flex overflow-hidden text-[4vw] -translate-y-1/2 z-[9] right-full -translate-x-1/2 top-1/2 leading-none tracking-tighter">
                        {"VISE".split("").map((item,index)=>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cardAnimations[1]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.05}}
                            className="inline-block"
                            key={index}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1> 
                    <div className='card w-full h-full rounded-2xl overflow-hidden'>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>

    </div>
  )
}

export default Featured