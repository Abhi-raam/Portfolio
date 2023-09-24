import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Knowledge from './Components/Knowledge'
// import Sample from './Components/Sample'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
      <Home />
      <About />
      <Knowledge/>
  </React.StrictMode>,
)
