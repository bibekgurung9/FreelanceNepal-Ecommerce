import React from 'react'
import Image from 'next/image'
import { images } from '@/constants'

const Services = () => {
    return (
    <div className='w-full flex xl:flex-row flex-col justify-center gap-10 max-container'>
        <h1 className='text-4xl font-bold text-center text-blue-500'>Services Commonly Searched For</h1> 
        <br />

        <div className='relative flex justify-center items-start w-full'>
            {images.map((image, index) => (
                <div key={index} className='flex flex-col justify-center items-center border lg:m-4'>
    <a href={image.link} className=''>
        <Image src={image.src} alt={image.alt} height={150} width={150}/>
        <span className='mt-1 font-bold'>{image.alt}</span>
    </a>
</div>

            ))}
        </div>
    </div>
  )
}

export default Services