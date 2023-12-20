import React from 'react'

const Buttons = ({ label, iconUrl } : any) => {
  return (
    <button 
        className='flex justify-center items-center gap-2 px-3 py-2 border font-montserrat rounded-full text-lg leading-none bg-blue-500 text-white'>
            {label}
            <img src={iconUrl} alt="" />
    
    </button>
  )
}

export default Buttons