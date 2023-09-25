import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Knowledge from './Components/Knowledge'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
// import Sample from './Components/Sample'
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Home />
      <About />
      <Knowledge/>
      <Skills/>
      <Footer/>
  </React.StrictMode>,
)
