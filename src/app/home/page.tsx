import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function HomePage() {
    return (
        <main className="realtive">

        <section className="xl:padding-1 wide:padding-r padding-b">
        <NavBar />
        </section>
        <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
        </section>
        <section className="padding">
            Trusted By
        </section>
        <section className="padding-x py-10">
        Services
        </section>
        <section className="bg-pale-blue-padding">
    
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            For Clients
        </section>

        <section className="padding-x sm:py-32 py-16 w-full">
        For Freelancers
        </section>

        <section className="bg-black-padding-x padding-t pb-8">
        Footer
        </section>
      </main>
    )
}