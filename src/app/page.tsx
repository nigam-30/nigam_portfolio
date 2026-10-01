import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EngineeringMetrics from "@/components/EngineeringMetrics";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text selection:bg-portfolio-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringMetrics />
        <Projects />
        <Skills />
        <CurrentlyBuilding />
        <Experience />
        <Certifications />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
