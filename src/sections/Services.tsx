import React from 'react'
import copywriting from '@/assets/icons/Services/copywriting.svg'
import coding from '@/assets/icons/Services/coding.svg'
import accountant from '@/assets/icons/Services/accountant.svg'
import graphicdesign from '@/assets/icons/Services/graphicdesign.svg'
import socialmedia from '@/assets/icons/Services/socialmedia.svg'
import photographer from '@/assets/icons/Services/photographer.svg'
import Image from 'next/image'

const Services = () => {

    const images = [
        { src: copywriting, alt: 'Copy Writer' },
        { src: coding, alt: 'coding' },
        { src: accountant, alt: 'Accountant' },
        { src: graphicdesign, alt: 'graphicdesign' },
        { src: socialmedia, alt: 'socialmedia' },
        { src: photographer, alt: 'photographer' },
    ]

    return (
    <div className='items-center justify-center'>
        <h1>Common Services Used On Our Platform:</h1> 
        <br />
        <div className='flex justify-start'>
        {images.map((image, index) => (
                    <Image 
                        key={index}
                        src={image.src} 
                        alt={image.alt}
                        width={50}
                        height={50}
                        style={{ margin: '0 10px' }} />
                ))}
        </div>

    </div>
  )
}

export default Services