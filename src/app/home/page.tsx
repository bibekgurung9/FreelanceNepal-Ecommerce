"use client";
import Hero from "@/sections/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/sections/Services";
import ForClients from "@/sections/ForClients";
import ForFreelancers from "@/sections/ForFreelancers";
import CustomerReviews from "@/sections/CustomerReviews";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="relative">
            <section className="">
                <NavBar />
            </section>
            <section className="padding-x bg-blue-500">
                <Hero />
            </section>
            <section className="padding-x py-10">
            <   Services />
            </section>
            <section className="padding-x sm:py-1 py-16 w-full bg-blue-500">
                <ForClients/>
            </section>
            <section className="padding-x sm:py-1 py-16 w-full bg-white">
                <ForFreelancers />
            </section>

            <section className="padding bg-gray-300">
                <CustomerReviews />
            </section>
            
            <section className="pb-8 pt-2">
                <Footer />
            </section>
      </main>
    )
}