import React from 'react';
import { navLinks } from '@/constants';

const NavBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src="" 
            alt=""
            width={30}
            height={30}
            />
        </a>
        <ul className='flex'>
          {navLinks.map((item) => {
            return <li key={item.label}>
              <a 
                href={item.href} 
                className="fonts-monerrat leading-normal text-lg text-slate-gray p-3">{item.label}</a>
            </li>
          })}
        </ul>
        <div className='hiddden:max-lg:block'>
          <img 
            src=""
            alt=""
            width={25}
            height={25}
           />
        </div>
      </nav>
    </header>
  )
}

export default NavBar