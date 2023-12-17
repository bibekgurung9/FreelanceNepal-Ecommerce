import React from 'react'

const Buttons = ({ label, iconUrl } : any) => {
  return (
    <button 
        className='bg-slate-300 border-2 p-2 font-bold rounded-full ml-2'>
            {label}
            <img src={iconUrl} alt="" />
    
    </button>
  )
}

export default Buttons