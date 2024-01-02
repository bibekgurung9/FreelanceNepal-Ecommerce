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
        <section className='flex flex-col justify-center items-center p-8 bg-blue-400'>
           <h1 className='font-bold text-4xl'>About Us</h1>
           <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quam unde nulla laboriosam sapiente, doloribus doloremque non enim suscipit adipisci itaque, quis quaerat? Id perferendis similique possimus inventore, veniam reprehenderit?</p>
        </section>

        <section className='flex flex-col p-16 justify-center items-center'>
           <h1 className='font-bold text-4xl'>Why Choose Us?</h1>
           <ul className='text-2xl text-center'>
            <li >1. We are the Best!</li>
            <li >2. We are the Best!</li>
            <li >3. We are the Best!</li>
            <li >4. We are the Best!</li>
            <li >5. We are the Best!</li>
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