import Buttons from '@/components/Buttons/Buttons'
import React from 'react'

const ForFreelancers = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-4 bg-white'>
        <h1 className=' text-black font-sans text-4xl font-bold bg-white'>Are You In Need Of A Talented Freelancer?</h1>
        <div className='relative flex flex-col justify-center items-start w-full bg-white text-black'>

        <p className='mt-1 text-1xl font-bold bg-white text-black'>Showcase your talents to potential employers.<br />If you don't have already have an account with us, you can sign up from here.</p>
        <div className='flex gap-8 mt-6'>
            <a href="/signup">
            <Buttons 
                label="Create A New Account" 
                iconUrl=''
                />
            </a>
        </div>

        <p className=' text-1xl font-bold text-black'>If you already have a account with us click the button below to find the employer you are looking for.</p>          
        <div className='flex gap-8 mt-6 '>
            <a href="/search">
            <Buttons 
                label="I'm in search for work" 
                iconUrl=""
                />
              </a>
        </div>

        </div>
</section>
  )
}

export default ForFreelancers