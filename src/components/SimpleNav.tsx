//simple nav bar for pages which do not need the main nav bar redirects to home
import React, { useState } from 'react';

const SimpleNav = () => {
  return (
    <header className='py-1 fixed z-10 w-full bg-white border-b'>
      <nav className='p-2 text-center'>
        <a href="/home" className='text-black font-bold font-mono text-2xl'>
          Freelance Nepal
        </a>
      </nav>
    </header>
  )
}

export default SimpleNav;