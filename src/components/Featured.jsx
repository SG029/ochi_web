import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHoveringt, setHoveringt] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer  relative w-1/2 h-[75vh] rounded-lg"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-[50%] top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none font-["Founders_Grotesk"] tracking-tighter'>
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "110%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden transition-all duration-[400ms] hover:scale-90">
              <img
                className="bg-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveringt(true)}
            onMouseLeave={() => setHoveringt(false)}
            className="cardcontainer relative w-1/2 h-[75vh] rounded-lg"
          >
            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none font-["Founders_Grotesk"] tracking-tighter'>
              {"VISE".split("").map((item, index) => (
                <motion.span
                initial={{ y: "100%" }}
                animate={isHoveringt ? { y: "0" } : { y: "110%" }}
                transition={{
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.05,
                  duration: 0.3,
                }}
                className="inline-block"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div 
            className="card w-full h-full rounded-xl overflow-hidden transition-all duration-[400ms] hover:scale-90">
              <img
                className="bg-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
