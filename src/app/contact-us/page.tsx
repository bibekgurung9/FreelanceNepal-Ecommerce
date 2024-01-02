"use client";
import React, { useState } from 'react'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function AboutUs() {

  //email sent by user
  const [email, setEmail] = React.useState({
    email: "",
    message: "",
  });
return (
    <main className='relative'>
        <section className='pb-8'>
            <NavBar />
        </section>
        <section className='flex flex-col justify-center items-center p-8 bg-blue-400'>
           <h1 className='font-extrabold text-4xl'>Contact Us</h1>
           <p className='text-xl font-semibold'>Reach Us Anytime</p>
        </section>

        <section className='flex flex-wrap justify-center pt-8'>
          <div className='flex flex-col m-2 border rounded-full bg-slate-300 p-8'>
            <h2 className='font-bold text-xl'>Customer Support : 24/7</h2> 
            <p>Toll-Free No : <span className='text-slate-700 font-bold'>144-XXXXXX</span></p>
            <p>Toll-Free No : <span className='text-slate-700 font-bold'>144-XXXXXX</span></p>
            <p>Email: <span className='text-red-600 font-semibold'>freelancenepal@support.com</span></p>
            <p>(For general inquiry and technical assistance)</p>
          </div>

         <div className='flex flex-col m-2 border rounded-full bg-slate-300 p-8'>
            <h2 className='font-bold text-xl'>Payment Support : 10am - 5pm</h2> 
            <p>Toll-Free No : <span className='text-slate-700 font-bold'>144-XXXXXX</span></p>
            <p>Toll-Free No : <span className='text-slate-700 font-bold'>144-XXXXXX</span></p>
            <p>Email: <span className='text-red-600 font-bold'>freelancenepal@finance.com</span></p>
            <p>(For general inquiry and technical assistance)</p>
          </div>

          <div className='flex flex-col m-2 border rounded-full bg-slate-300 p-8'>
            <h2 className='font-bold text-xl'>Our Branches : Nationwide</h2> 
            <p>Head Office :<span className='text-slate-700 font-bold'> Kathmandu, Nepal </span></p>
            <p>Branch(Pokhara) : <span className='text-slate-700 font-bold'> Old Baneshwor</span></p>
            (For general inquiry and technical assistance)
          </div>

        </section>
        <section className="pt-2">
            <Footer />
        </section>
    </main>
    )
}