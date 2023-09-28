import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Knowledge from './Components/Knowledge'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Knowledge/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default App