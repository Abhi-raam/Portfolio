import React from 'react';
import imageMob from '../assets/home1.jpg'
import bck from '../assets/homebck.jpg'
// import bck from '../assets/homebck.jpeg'
function Home() {
    const myStyle={
        backgroundImage: `url(${bck})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width:"100%",
        backgroundPosition: 'center'
    };
    return (
        <div id='home' className='pt-16  grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-0' style={myStyle}>
            <div data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine" className='flex items-center justify-center md:justify-start '>
                <img className='rounded-full md:rounded-full pb-5 p-9 h-80 brightness-[0.8]  md:w-auto  md:h-auto  lg:w-[80vh] ' src={imageMob} alt="abhiramImage" />
            </div>
            <div className=' items-center justify-center flex flex-col lg:h-[100vh]'>
                <div data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine" className=''>
                    <h1 className='lg:text-5xl text-center md:text-start text-xl text-yellow-400 font-semibold'>HELLO!</h1>
                    <h1 className='lg:text-5xl text-xl font-semibold text-slate-200'>I'M ABHIRAM </h1>
                    <h1 className="md:text-xl text-center font-semibold text-slate-300">Web Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Home