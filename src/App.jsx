import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion'
import './cursor.css'
import { useEffect } from 'react';
import { initCursor } from './cursor.js';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    initCursor();
  }, []);

  return (

    <div className=' w-full min-h-screen text-white bg-zinc-900'>
      <div className='cursor transition: transform 0.6s cubic-bezier(0.5, 1, 0.89, 1)'></div>
      <Navbar />
      <Landing />
      <Marqee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App