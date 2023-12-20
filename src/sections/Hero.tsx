import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import { statistics } from '@/constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
        id="home"
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-4'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-12 '>

            <h1 className=' text-black text-4xl font-bold bg'>Work Should Be Done</h1>
            <p className=' text-black text-2xl font-bold'>Find a Client. Find a Freelancer. Find The Best. Do Your Best.</p>
              
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
                <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16'>
                {statistics.map((stat) => (
                  <div key={stat.label} className=''>
                    <p className=' text-black text-xl font-bold'>{stat.value}</p>
                    <p className=' text-black text-xl font-bold'>{stat.label}</p>
                  </div>
                ))}
                </div>
            </div>
    </section>
  )
}

export default Hero