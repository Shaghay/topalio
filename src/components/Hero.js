import React from 'react';
import HeroImageUrl from '../files/HeroImage.svg'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto h-screen flex flex-col md:justify-center items-center md:px-0 px-4 relative'>
        <h1 className='text-4xl font-bold md:mt-0 mt-16 text-center text-slate-900'>Two line long header example</h1>
        <h1 className='md:block hidden text-4xl font-bold text-slate-900'>for your web project</h1>
        <p className='mt-8 text-xl font-medium text-center text-slate-500'>poster can be one of the effective marketing and advertising materials. <br className='md:block hidden'/>It is also a great tool to use when yoi want to present your project</p>
        <div className='sm:flex mt-8 text-center space-x-2 w-auto'>
            <input className='w-64 h-10 px-2 text-slate-900 bg-slate-200 rounded-md ' placeholder='Email'/>
            <button className='sm:mt-0 mt-2 tracking-widest text-white px-4 py-2 bg-fuchsia-800 rounded-md hover:bg-fuchsia-600 duration-300'>Subscribe</button>
        </div>
        <span className='mt-4 text-sm text-center text-slate-400'>No spam, notifications only about new products, updates and freebies. <br className='md:block hidden'/>You can always unsubscribe.</span>
        <img src={HeroImageUrl} className='md:w-1/3 sm:w-1/2 w-4/6' alt='Hero'/>
    </div>
  )
}

export default Hero

//