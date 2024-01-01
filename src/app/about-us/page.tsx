"use client";
import React from 'react'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Services from '@/sections/Services';
import CustomerReviews from '@/sections/CustomerReviews';

export default function AboutUs() {
return (
    <main className='relative'>
        <section className='pb-8'>
            <NavBar />
        </section>
        <section className='text-center p-8 m-32'>
           <h1 className='font-bold text-4xl'>About Us</h1>
           <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam unde nulla laboriosam sapiente, doloribus doloremque non enim suscipit adipisci itaque, quis quaerat? Id perferendis similique possimus inventore, veniam reprehenderit?</p>
        </section>
        <section className='bg-blue-500 text-center p-32'>
           <h1 className='font-bold text-4xl'>Why Choose Us?</h1>
           <ul className='text-3xl'>
            <li>We are #1</li>
            <li>We are #1</li>
            <li>We are #1</li>
            <li>We are #1</li>
            <li>We are #1</li>
           </ul>
        </section>
        <section className="padding bg-slate-200">
            <CustomerReviews />
        </section>
            
        <section className="pt-2">
            <Footer />
        </section>
    </main>
    )
}