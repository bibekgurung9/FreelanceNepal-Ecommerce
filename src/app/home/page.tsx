"use client";
import Hero from "@/sections/Hero";
import NavBar from "@/components/NavBar";
import TrustedBy from "@/sections/TrustedBy";
import Services from "@/sections/Services";
import ForClients from "@/sections/ForClients";

export default function HomePage() {
    return (
        <main className="relative">
            <section className="">
                <NavBar />
            </section>
            <section className="padding-x">
                <Hero />
            </section>
            <section className="padding-x py-10">
            <   Services />
            </section>
            <section className="bg-pale-blue-padding">
                //
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <ForClients/>
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                For Freelancers
            </section>

            <section className="padding bg-gray-300">
                Customer Reviews
            </section>

            <section className="padding padding-x sm:py-32 py-16 w-full bg-gray-400">
                Subscribe to our Newsletter
            </section>

            <section className="bg-black-padding-x padding-t pb-8">
            Footer
            </section>
      </main>
    )
}