import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Carve 24×7 — Premium Edition (V2 Demo)",
  description:
    "V2 demo — a refined, premium dark marketing experience for Carve 24×7. 24-hour gym in Vasundhara, Ghaziabad.",
};

export default function V2Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Features />
        <Membership />
        <Trainers />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
