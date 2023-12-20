import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import { statistics } from '@/constants'
import Image from 'next/image'
import heroImage from '@/assets/images/heroImage.jpg'

const Hero = () => {
  return (
    <section
        id="home"
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10 back'
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 bg-transparent'>

            <h1 className='bg-transparent text-white text-3xl font-bold'>Work Should Be Done</h1>
            <p className='bg-transparent text-white text-2xl font-bold'>Find a Client. Find a Freelancer. Find The Best. Do Your Best.</p>
              
              <div className='flex gap-16 mt-6 bg-transparent'>
              <Buttons 
                  label="I am a Freelancer" 
                  iconUrl=""
                  />
              <Buttons 
                  label="I am a Client" 
                  iconUrl=""
                  />
              </div>

                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 bg-transparent'>
                {statistics.map((stat) => (
                  <div key={stat.label} className='bg-transparent'>
                    <p className='bg-transparent text-white text-xl'>{stat.value}</p>
                    <p className='bg-transparent text-white text-xl'>{stat.label}</p>
                  </div>
                ))}
                </div>
            </div>
    </section>
  )
}

export default Hero