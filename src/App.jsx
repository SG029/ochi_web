import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Marqee />
      <About />
      <Eyes />
    </div>
  )
}

export default App