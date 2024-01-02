import Buttons from '@/components/Buttons/Buttons'
import { statistics } from '@/constants'
import React from 'react'

const ForClients = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-4 bg-blue-500'>
        <h1 className=' text-white font-sans text-4xl font-bold bg-blue-500'>Are You In Need Of A Talented Freelancer?</h1>
        <div className='relative flex flex-col justify-center items-start w-full bg-blue-500 text-white'>

        <p className='mt-1 text-1xl font-bold bg-blue-500 text-white'>Hire one of the best talents in the industry.<br />If you don't have already have an account with us, you can sign up from here.</p>
        <div className='flex gap-8 mt-6'>
            <a href="/signup">
            <Buttons 
                label="Create A New Account" 
                iconUrl=''
                />
            </a>
        </div>

        <p className=' text-1xl font-bold text-white'>If you already have a account with us click the button below to search for one of the finest talents in the industry you are looking for.</p>          
        <div className='flex gap-8 mt-6 '>
            <a href="/search">
            <Buttons 
                label="I'm in search for talent" 
                iconUrl=""
                />
              </a>
        </div>

        </div>
</section>
  )
}

export default ForClients