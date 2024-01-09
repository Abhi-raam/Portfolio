import React from 'react';
import imageMob from '../assets/home1.jpg'
// import imageMob1 from '../assets/Avatar.jpg'
import imageMob1 from '../assets/Avatar1.png'
// import bck from '../assets/homebck1.jpg'
// import bck from '../assets/homebck.jpeg'
function Home() {
    const myStyle = {
        backgroundImage: `url(${imageMob1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div id='home' className=' min-h-screen ' style={myStyle} >
            <div className=' justify-end xl:justify-center flex flex-col h-[90vh]'>
                <div data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine" className='text-center xl:text-end'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl text-yellow-400 font-semibold tracking-[0.2em]'>HELLO!</h1>
                    <h1 className='lg:text-4xl  md:text-4xl text-2xl font-semibold text-slate-200 tracking-[0.2em]'>I'M ABHIRAM </h1>
                    <h1 className="md:text-2xl text-xl  font-semibold text-slate-300 tracking-[0.1em]">Web Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Home