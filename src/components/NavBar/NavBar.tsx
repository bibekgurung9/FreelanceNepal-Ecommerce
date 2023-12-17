import React from 'react';
import { navLinks } from '@/constants';

const NavBar = () => {
  return (
    <header className='padding-x absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container  p-2'>
        {/*Change the image later and remove this text here */}
        <a href="/" className='bg-blue-500 text-slate-50 px-2 font-bold font-mono text-2xl'>
          { /*<img 
            src="" 
            alt=""
            width={30}
            height={30}
            /> */} Freelance Nepal
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => {
            return <li key={item.label}>
              <a 
                href={item.href} 
                className="fonts-monerrat leading-normal text-lg text-slate-gray p-3">{item.label}</a>
            </li>
          })}
        </ul>
        <div className='hiddden:max-lg:block fonts-monerrat leading-normal text-lg text-slate-gray p-3 bg-blue-500  text-slate-50 font-bold font-mono'>
          {/*<img 
            src=""
            alt=""
            width={25}
            height={25}
           />
           And add button functions
           */}
           Hamburger
        </div>
      </nav>
    </header>
  )
}

export default NavBar