import React from 'react';
import imageHome from '../assets/home.jpg'
// import imageMob from '../assets/home1.jpg'
import imageMob from '../assets/1657858.jpg'

function Home() {
    return (
        <div className='pt-16'>
            <div className='bg-cover grid grid-cols-1 bg-center h-[100vh] bg-[url("assets/home.jpg")]  sm:relative'>
                <div className='absolute sm:top-[40%] top-[90%] right-[50] sm:right-[15%]  transform sm:translate-y-[-70%] text-yellow-400 font-bold sm:text-4xl text-xl space-y-3'>
                    <h1 className='text-right'>HELLO!</h1>
                    <h1 className='text-right'>MY NAME IS ABHIRAM</h1>
                </div>
            </div>
        </div>
    )
}

export default Home