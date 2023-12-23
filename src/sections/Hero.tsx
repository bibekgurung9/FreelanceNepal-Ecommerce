import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import { statistics } from '@/constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
        id="home"
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen border-2 gap-10 max-container'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
              <p className='text-2xl font-bold font-mono'>Welcome to <span className='text-blue-500'>Freelance Nepal!</span></p>
              <h1 className=' text-blue-500 text-4xl font-bold bg'><span className='text-black'>Find The Talent or Work You Need Through </span>Freelance Nepal</h1>
              <p className=' text-black text-2xl font-bold py-2'>Find a Client. Find a Freelancer. Find The Best. Do Your Best.</p>
              
              <div className='flex gap-8 mt-6'>
              <Buttons 
                  label="I'm a Freelancer" 
                  iconUrl=""
                  />
              <Buttons 
                  label="I'm a Client" 
                  iconUrl=""
                  />
              </div>
                <div className='flex justify-start items-start flex-wrap w-full mt-1 gap-16'>
                {statistics.map((stat) => (
                  <div key={stat.label} className='mt-1'>
                    <p className=' text-black text-2xl font-bold '>{stat.value}</p>
                    <p className=' text-black text-xl font-bold'>{stat.label}</p>
                  </div>
                ))}
                </div>
            </div>
    </section>
  )
}

export default Hero