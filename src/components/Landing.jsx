import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.5' className='w-full h-100vh bg-zinc-900 pt-2'>
        <div className='textstructure mt-52 px-20'>
            {['We create','Eye Opening','Presentations'].map((item,index)=>{
                return (
                <div className='masker'>
                     <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (<motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] bg-green-500 relative top-[-1.2vw] flex overflow-hidden'>
                            <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>)}
                <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-["Founders_Grotesk"] font-regular'>
                {item}
                </h1>
                </div>
                </div>
            )})}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between item-center py-5 px-20'>
            {["For public and private companies","From the first pitvh to IPO"].map((item,index)=> (
                <p className='text-md font-light traking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-600 rounded-full font-light text-md  uppercase'>START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 rounded-full'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing