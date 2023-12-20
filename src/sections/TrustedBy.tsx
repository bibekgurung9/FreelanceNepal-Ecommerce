import React from 'react';
import Image from 'next/image';
import netflixLogo from '@/assets/icons/netflixLogo.png';
import facebookLogo from '@/assets/icons/facebookLogo.png';
import amazonLogo from '@/assets/icons/amazonLogo.png';
import microsoftLogo from '@/assets/icons/microsoftLogo.png';
import appleLogo from '@/assets/icons/appleLogo.png';

const TrustedBy = () => {

  const images = [
    { src : netflixLogo, alt: 'Netflix Logo'},
    { src : facebookLogo, alt: 'Facebook Logo'},
    { src : amazonLogo, alt: 'Amazon Logo'},
    { src : microsoftLogo, alt: 'Microsoft Logo'},
    { src : appleLogo, alt: 'Apple Logo'},
  ]
  
  return (
    <>
    <main>
        <div className='flex justify-center mt-4 items-center'>
          <h1 className='mb-4'>Trusted By: </h1>
            <div className='flex gap-16'>            
              {images.map((image, index) => (
                <div className='border'>
                <Image 
                    key={index} 
                    src={image.src} 
                    alt={image.alt}
                    width={100}
                    height={100}
                    className='' />
                </div>
              ))}
            </div>

        </div>
    </main>
    </>

  )
}

export default TrustedBy