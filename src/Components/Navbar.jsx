import React, { useState } from 'react'
import { Link } from 'react-scroll';

function Navbar() {
    const [mobileToggle, setMobiletoggle] = useState(false)
    const buttonClick = () => {
        setMobiletoggle(!mobileToggle)
    }
    return (
        <div className='fixed top-0 left-0 right-0 z-50'>
            <div className="navbar  bg-white-10/2 bg:blur bg-opacity-30 backdrop-blur">
                <div className="flex-1 text-yellow-400">
                    <p className="btn btn-ghost normal-case text-xl">Abhiram</p>
                </div>
                <div>
                    <ul className="lg:flex items-center space-x-6  font-semibold">
                        <li className='lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out">
                            <Link to="about" smooth={true} duration={500}>About Me</Link>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out">
                            <Link to="project" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out">

                            <Link to="knowledge" smooth={true} duration={500}>Knowledge</Link>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out">
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li className="lg:inline-block hidden cursor-pointer hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out">
                            <Link to="about" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-none lg:hidden">
                    <button className="btn  btn-ghost text-slate-200 " onClick={buttonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>

            {/* mobile view */}
            {mobileToggle && (
                <div className="relative">
                    <div className='grid backdrop-filter backdrop-blur bg-opacity-30  bg-white-10/2 justify-end font-semibold absolute top-0 left-0 right-0'>
                        <ul className="mr-3 space-y-2" >
                            <li className='hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                                <Link to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className='hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                                <Link to="about" smooth={true} duration={500}>About Me</Link>
                            </li>
                            <li className='hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                                <Link to="knowledge" smooth={true} duration={500}>Knowledge</Link>
                            </li>
                            <li className='hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li className='hover:text-slate-200 text-yellow-400 transition delay-75 duration-150 ease-in-out'>
                                <Link to="about" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar