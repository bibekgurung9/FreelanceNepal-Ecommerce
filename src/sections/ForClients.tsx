import Buttons from '@/components/Buttons/Buttons'
import { statistics } from '@/constants'
import React from 'react'

const ForClients = () => {
  return (
    <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-4 bg-blue-500'>
        <h1 className=' text-white font-sans text-5xl font-bold bg-blue-500'>Are You In Need Of A Freelancer?</h1>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-12  bg-blue-500 text-white'>

        <p className='mt-1 text-2xl font-bold  bg-blue-500 text-white'>Find one of the best talents in the industry.<br />If you don't have an account with us, you can sign up from here.</p>
        <div className='flex gap-8 mt-6'>
            <Buttons 
                label="Create A Account" 
                iconUrl=""
                />
        </div>

        <p className=' text-1xl font-bold text-black'>If you already have a account with us click the button below to search for one of the finest talents in the industry you are looking for.</p>          
        <div className='flex gap-8 mt-6 '>
            <Buttons 
                label="I'm in search for talent" 
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

export default ForClients