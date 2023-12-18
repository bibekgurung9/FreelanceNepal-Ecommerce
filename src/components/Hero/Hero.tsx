import React from 'react'
import Buttons from '../Buttons/Buttons'

const Hero = () => {
  return (
    <section
        id="home"
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <h1>Work Should Be Done</h1>
            <p>Find a Client. Find a Freelancer. Find The Best. Do Your Best.</p>
            <Buttons 
                label="Show Now" 
                iconUrl=""
                />
            </div>
    </section>
  )
}

export default Hero