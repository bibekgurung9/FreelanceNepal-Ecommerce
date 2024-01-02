import React from 'react'
import Image from 'next/image'
import github from '@/assets/icons/Logos/github.svg'
import linkedin from '@/assets/icons/Logos/linkedin.svg'
import phone from '@/assets/icons/Logos/phone.svg'
import telephone from '@/assets/icons/Logos/telephone.svg'
import map from '@/assets/icons/Logos/map.svg'
import email from '@/assets/icons/Logos/email.svg'

const Footer = () => {
  return (
    <footer>
        <a href="/" className='text-black px-2 font-bold font-mono text-2xl'>
            Freelance Nepal
        </a>
        <div className='flex gap-2 mx-2'>        
            <a href="https://github.com/bibekgurung9" target='_blank'>
                <Image src={github} alt={''} width={25} height={25} />
            </a>
            <a href="https://www.linkedin.com/in/bibekgurung9/" target='_blank'>
                <Image src={linkedin} alt={''} width={25} height={25} />
            </a>
        </div>

        <div className='container mx-auto py-8 flex flex-wrap justify-around'>
            <div id='column2' className='flex flex-col flex-wrap m-1'>
                <h1 className='font-bold text-xl'>Quick Links</h1>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Find Talent</li></a>
                    <a href="#"><li>Find Work</li></a>
                    <a href="#"><li>Contact Us</li></a>
                </ul>
            </div>
            <div id='column2' className='flex flex-col flex-wrap m-1'>
                <h1 className='font-bold text-xl'>Navigation</h1>
                <ul>
                    <a href="#"><li>Login</li></a>
                    <a href="#"><li>SignUp</li></a>
                    <a href="#"><li>Profile</li></a>
                </ul>
            </div>
            <div id='column3' className='flex flex-col flex-wrap m-1'>
                <h1 className='font-bold text-xl'>Contact</h1>
                <ul>
                    <p className='flex'><Image src={phone} alt={''} width={25} height={25}/>+977-xxxxxx</p>
                    <p className='flex'><Image src={telephone} alt={''} width={25} height={25} />+144-xxxxxx</p>
                    <p className='flex'><Image src={email} alt={''} width={25} height={25} />iambibekgrgr@gmail.com</p>
                    <p className='flex'><Image src={map} alt={''} width={25} height={25} />Kathmandu, Nepal</p>
                </ul>
            </div>
        </div>     

        <div className='text-center'><span className='text-xl font-bold'>This Website Was Made By: 
        <a href="https://github.com/bibekgurung9" target='_blank' className='hover:text-red-500'> Bibek Gurung</a></span></div>
    </footer>
  )
}

export default Footer