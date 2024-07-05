import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#CCCCCD] flex gap-5 items-center px-[3vw]'>
        <div className='cardcontainer h-[55vh] w-1/2'>
            <div className='card w-full h-full relative bg-[#004D43] rounded-2xl flex items-center justify-center'>
                <img className='scale-150' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <div className='absolute bottom-0 w-full h-1/4 flex items-center justify-start '>
                    <div className='bg-[#004D43]  h-2/5 ml-7 border-[#CDEA68] text-[#CDEA68] font-["Neue_Montreal"] border-2 rounded-full flex px-3 items-center'>©2019-2022</div>
                </div>
            </div>
        </div>
        <div className='cardcontainer h-[55vh] w-1/2 gap-5 flex'>
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
                <img  className='scale-125' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <div className='absolute bottom-0 w-full h-1/4 flex items-center justify-start '>
                    <div className='bg-[#212121]  h-2/5 ml-7 border-zinc-100 text-zinc-100 font-["Neue_Montreal"] border-2 rounded-full flex px-3 items-center'>RATING 5.0 ON CLUTCH</div>
                </div>
            </div>
            <div className='card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
                <img className='scale-50' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <div className='absolute bottom-0 w-full h-1/4 flex items-center justify-start '>
                    <div className='bg-[#212121]  h-2/5 ml-7 border-zinc-100 text-zinc-100 font-["Neue_Montreal"] border-2 rounded-full flex px-3 items-center'>BUSINESS BOOTCAMP ALUMNI</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards