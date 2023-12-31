import React from 'react'

const Buttons = ({ label, iconUrl } : any) => {
  return (
    <button 
        className='flex justify-center items-center gap-0 px-16 py-4 mr-1 mb-4 border font-montserrat rounded-full text-lg leading-none bg-white text-black border-black font-bold'>
            {label}
            <img src={iconUrl} alt="" />
    
    </button>
  )
}

export default Buttons