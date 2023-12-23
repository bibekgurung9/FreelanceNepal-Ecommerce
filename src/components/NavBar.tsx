import React, { useState } from 'react';
import { navLinks } from '@/constants';
import Image from 'next/image';
import  hamburger  from '@/assets/images/hamburger.png'
import closeIcon from "@/assets/images/closeIcon.svg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hamburgerImage, setHamburgerImage] = useState(hamburger);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    //change image source based on the nav state
    setHamburgerImage(isNavOpen ? hamburger: closeIcon);
  }

  return (
    <header className='py-1 fixed z-10 w-full bg-white border-b'>
      <nav className='flex justify-between items-center max-container p-2 '>
        <a href="/" className='text-black px-2 font-bold font-mono text-2xl'>
          Freelance Nepal
        </a>
        {/* Navigation for Larger Screens */}
        <ul className='max-lg:flex-1 flex justify-center items-center gap-16 max-lg:hidden bg-white'>
          {navLinks.map((item) => {
            return <li key={item.label}>
              <a 
                href={item.href} 
                className="fonts-monerrat leading-normal text-lg text-slate-gray p-3  text-black font-bold">{item.label}</a>
            </li>
          })}
        </ul>

        {/* Hamburger Menu For Smaller Screens */}
        <div className='flex sm:block lg:hidden'>
          <Image
            className='cursor-pointer' 
            src={hamburgerImage}
            alt="hamburger menu"
            width={25}
            height={25}
            onClick={toggleNav}
           />
        </div>
        {/* DropDown Menu For Smaller Screens */}
        {isNavOpen &&(
          <ul className= 'lg:hidden bg-white absolute top-14 left-0 right-0 text-center p-4'>
            {navLinks.map((item) => {
            return <li key={item.label} className='mb-2'>
              <a 
                href={item.href} 
                className="fonts-monerrat leading-normal text-lg text-slate-gray p-2 text-black font-bold hover:bg-blue-200 hover:rounded-full">{item.label}</a>
            </li>
          })}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default NavBar;