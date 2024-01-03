import React from 'react'
import { reviews } from '@/constants'
import Image from 'next/image'
import  star  from '@/assets/star.svg';

//logic for adding reviews of starts
const renderRating = (rating: number) => {
  const stars = []
  for(let i =0; i < rating; i++){
    stars.push(
      <Image key={i} src={star} alt='stars' width={20} height={20} />
    )
  }
  return stars;
}

const CustomerReviews = () => {
  return (
    <div className='flex flex-col items-center bg-white p-4'>
      <h1 className='font-bold text-4xl mb-4'>Check Our Reviews</h1>
      <div className='flex flex-row items-center'>
        {reviews.map((review, index) => (
          <div key={index} className='flex flex-col justify-center items-center border rounded p-4 m-4 bg-slate-200'>
            <Image src={review.src} alt={''} width={100} height={100} />
            <h1 className='font-bold text-3xl text-center'>{review.name}</h1>
            <p className='text-center'>{review.description}</p>
            <div className='flex m-1 mt-1'>{renderRating(review.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews