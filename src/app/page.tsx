import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar */}
      <main style={{ paddingTop: "64px" }}>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
