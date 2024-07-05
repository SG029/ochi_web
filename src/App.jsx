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

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (

    <div className=' w-full min-h-screen text-white bg-zinc-900'>

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