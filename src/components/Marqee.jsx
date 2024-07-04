import { motion } from 'framer-motion'
import React from 'react'

function Marqee() {
  return (
    
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: 0}} animate={{x:'-100%'}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[24vw] leading-none font-["Founders_Grotesk"] uppercase -mb-[6.5vw] pt-10 font-regular'>WE ARE OCHI</motion.h1 >
            <motion.h1 initial={{x: 0}} animate={{x:'-100%'}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[24vw] leading-none font-["Founders_Grotesk"] uppercase -mb-[6.5vw] pt-10 font-regular'>WE ARE OCHI</motion.h1 >
        </div>
    </div>
  )
}

export default Marqee