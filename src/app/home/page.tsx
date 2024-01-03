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
            <section className="padding-x bg-slate-400">
                <Hero />
            </section>
            <section className="padding-x py-10 bg-slate-300">
            <   Services />
            </section>
            <section className="padding-x w-full">
                <ForClients/>
            </section>
            <section className="padding-x w-full bg-slate-300">
                <ForFreelancers />
            </section>
            <section className="padding">
                <CustomerReviews />
            </section>
            <section className="pt-2">
                <Footer />
            </section>
      </main>
    )
}