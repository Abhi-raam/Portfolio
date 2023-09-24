import React from 'react';
import imageHome from '../assets/home.jpg'
import imageHome1 from '../assets/home2.jpg'
// import imageMob from '../assets/home1.jpg'
import imageMob from '../assets/1657858.jpg'

function Home() {
    return (
        <div className='pt-16 grid grid-cols-1 md:grid-cols-2 container'>
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