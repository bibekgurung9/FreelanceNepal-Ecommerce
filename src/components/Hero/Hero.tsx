import React from 'react'
import Buttons from '../Buttons/Buttons'
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

            <h1 className='bg-transparent'>Work Should Be Done</h1>
            <p className='bg-transparent'>Find a Client. Find a Freelancer. Find The Best. Do Your Best.</p>
            <Buttons 
                label="Show Now" 
                iconUrl=""
                />
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 bg-transparent'>
                {statistics.map((stat) => (
                  <div key={stat.label} className='bg-transparent'>
                    <p className='bg-transparent'>{stat.value}</p>
                    <p className='bg-transparent'>{stat.label}</p>
                  </div>
                ))}
                </div>
            </div>
    </section>
  )
}

export default Hero