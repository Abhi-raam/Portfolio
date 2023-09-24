import React, { useState } from 'react'

function Navbar() {
    const [mobileToggle, setMobiletoggle] = useState(false)
    const buttonClick = () => {
        setMobiletoggle(!mobileToggle)
    }
    return (
        <div className='fixed top-0 left-0 right-0'>
            <div className="navbar  bg-yellow-400">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Abhiram</a>
                </div>
                <div>
                    <ul className="lg:flex items-center space-x-6  font-semibold">
                        <li className='lg:inline-block hidden hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="">Home</a>
                        </li>
                        <li className="lg:inline-block hidden hover:text-white transition delay-75 duration-150 ease-in-out">
                            <a href="#">About Me</a>
                        </li>
                        <li className="lg:inline-block hidden hover:text-white transition delay-75 duration-150 ease-in-out">
                            <a href="#">Service</a>
                        </li>
                        <li className="lg:inline-block hidden hover:text-white transition delay-75 duration-150 ease-in-out">
                            <a href="#">Projects</a>
                        </li>
                        <li className="lg:inline-block hidden hover:text-white transition delay-75 duration-150 ease-in-out">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-none lg:hidden">
                    <button className="btn btn-square btn-ghost " onClick={buttonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
            
            {/* mobile view */}
            {mobileToggle && (
                <div className="relative">
                <div className='grid backdrop-filter backdrop-blur-lg bg-opacity-30 bg-yellow-400 justify-end font-semibold absolute top-0 left-0 right-0'>
                    <ul className="mr-3 space-y-2" >
                        <li className='hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="#">Home</a>
                        </li>
                        <li className='hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="#">About Me</a>
                        </li>
                        <li className='hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="#">Service</a>
                        </li>
                        <li className='hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="#">Projects</a>
                        </li>
                        <li className='hover:text-white transition delay-75 duration-150 ease-in-out'>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            )}
        </div>
    )
}

export default Navbar