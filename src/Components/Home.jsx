import React from 'react';
import imageHome from '../assets/home.jpg'
import imageHome1 from '../assets/home2.jpg'
// import imageMob from '../assets/home1.jpg'
import imageMob from '../assets/1657858.jpg'

function Home() {
    return (
        <div className='pt-16 grid grid-cols-1 md:grid-cols-2 container'>
            {/* <div className='bg-cover grid grid-cols-1 bg-center h-[100vh] bg-[url("assets/home.jpg")]  sm:relative'>
                <div className='absolute sm:top-[40%] top-[90%] right-[50] sm:right-[15%]  transform sm:translate-y-[-70%] text-yellow-400 font-bold sm:text-4xl text-xl space-y-3'>
                    <h1 className='text-right'>HELLO!</h1>
                    <h1 className='text-right'>MY NAME IS ABHIRAM</h1>
                </div>
            </div> */}
            <div className='flex justify-center md:justify-start '>
                <img className='rounded-full md:rounded h-[60vh] md:h-[90vh]' src={imageHome1} alt="" />
            </div>
            <div className=' items-center justify-center flex flex-col lg:h-[100vh]'>
                <div className=''>
                    <h1 className='lg:text-5xl text-end text-xl font-semibold'>HELLO!</h1>
                    <h1 className='lg:text-5xl text-xl font-semibold'>MY NAME IS ABHIRAM</h1>
                    <h1 className="md:text-xl text-center">Full-Stack Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Home