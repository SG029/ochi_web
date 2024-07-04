import React from 'react'

function About() {
  return (
    <div className='w-full py-[7vw] px-[4vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need
            to raise funds, sell products, explain complex ideas, and hire great
            people.</h1>
        <div className='w-full border-t-[1px] pt-10 mt-20 border-[#738146] flex gap-5'>
            <div className='w-1/2'>
            <h1 className='text-[4vw] tracking-tighter'>Our approach:</h1>
            <button className='h-[4vw] py-6 bg-zinc-900 mt-[1vw] rounded-full text-white flex gap-8 items-center px-7 uppercase'>Read More
              <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#77873e] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About