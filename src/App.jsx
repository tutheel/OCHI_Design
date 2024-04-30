import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eye from './components/Eye';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eye/>
        <Featured />
        <Cards />
        <Footer/>
    </div>
  )
}

export default App